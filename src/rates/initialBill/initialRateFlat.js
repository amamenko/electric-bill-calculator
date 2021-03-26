import loadProfile from "../../loadProfile.json";

export const initialRateFlat = loadProfile.reduce(
  (a, b) => a + 0.15 * b["Electricity:Facility [kWh](Hourly)"],
  0
);
