import loadProfile from "../../loadProfile.json";

export const combinedRateTOU = (miles, hoursCharging) => {
  const evLoad = 0.3 * miles;

  const peakHomeLoad = loadProfile.reduce((a, b) => {
    const currentHour = Number(b["Date/Time"].split(" ")[2].slice(0, 2));

    if (currentHour > 12 && currentHour < 19) {
      return a + Number(b["Electricity:Facility [kWh](Hourly)"]);
    } else {
      return a;
    }
  }, 0);

  const offPeakHomeLoad = loadProfile.reduce((a, b) => {
    const currentHour = Number(b["Date/Time"].split(" ")[2].slice(0, 2));

    if (currentHour <= 12 || currentHour >= 19) {
      return a + Number(b["Electricity:Facility [kWh](Hourly)"]);
    } else {
      return a;
    }
  }, 0);

  let totalBill = 0;

  if (hoursCharging === "peak") {
    totalBill = 0.2 * (peakHomeLoad + evLoad) + 0.08 * offPeakHomeLoad;
  } else {
    totalBill = 0.2 * peakHomeLoad + 0.08 * (offPeakHomeLoad + evLoad);
  }

  return totalBill;
};
