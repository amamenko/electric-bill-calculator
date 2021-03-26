import React from "react";
import { initialRateFlat } from "../../rates/homeLoad/initialRateFlat";
import { initialRateTOU } from "../../rates/homeLoad/initialRateTOU";
import { evRateFlat } from "../../rates/electricVehicle/evRateFlat";
import { evRateTOU } from "../../rates/electricVehicle/evRateTOU";

const Result = (props) => {
  const { currentRate, milesDriven, hoursCharging } = props;

  const solveForBillImpact = () => {
    if (currentRate === "A") {
      return {
        billImpactRateA:
          initialRateFlat + evRateFlat(milesDriven) - initialRateFlat,
        billImpactRateB:
          initialRateFlat +
          evRateTOU(milesDriven, hoursCharging) -
          initialRateFlat,
      };
    } else {
      return {
        billImpactRateA:
          initialRateTOU + evRateFlat(milesDriven) - initialRateTOU,
        billImpactRateB:
          initialRateTOU +
          evRateTOU(milesDriven, hoursCharging) -
          initialRateTOU,
      };
    }
  };

  return (
    <div>
      <span>
        Bill impact of charging EV on flat rate:{" "}
        {solveForBillImpact().billImpactRateA}
      </span>
      <span>
        Bill impact of charging EV on TOU rate:{" "}
        {solveForBillImpact().billImpactRateB}
      </span>
    </div>
  );
};

export default Result;
