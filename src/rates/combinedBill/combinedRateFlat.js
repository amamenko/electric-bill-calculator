import loadProfile from "../../loadProfile.json";

export const combinedRateFlat = (miles) => {
  const homeLoad = loadProfile.reduce(
    (a, b) => a + Number(b["Electricity:Facility [kWh](Hourly)"]),
    0
  );

  const evLoad = 0.3 * miles;

  const combinedLoad = homeLoad + evLoad;

  return 0.15 * combinedLoad;
};
