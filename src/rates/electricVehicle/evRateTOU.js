export const evRateTOU = (miles, hoursCharging) => {
  const consumption = 0.3 * miles;

  let totalBill = 0;

  if (hoursCharging === "peak") {
    totalBill = 0.2 * consumption;
  } else {
    totalBill = 0.08 * consumption;
  }

  return totalBill;
};
