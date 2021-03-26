import loadProfile from "../../loadProfile.json";

export const initialRateTOU = loadProfile.reduce((a, b) => {
  const currentHour = Number(b["Date/Time"].split(" ")[2].slice(0, 2));

  if (currentHour > 12 && currentHour < 19) {
    return a + 0.2 * b["Electricity:Facility [kWh](Hourly)"];
  } else {
    return a + 0.08 * b["Electricity:Facility [kWh](Hourly)"];
  }
}, 0);
