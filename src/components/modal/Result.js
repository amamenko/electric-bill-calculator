import React from "react";
import { initialRateFlat } from "../../rates/initialBill/initialRateFlat";
import { initialRateTOU } from "../../rates/initialBill/initialRateTOU";
import { combinedRateFlat } from "../../rates/combinedBill/combinedRateFlat";
import { combinedRateTOU } from "../../rates/combinedBill/combinedRateTOU";
import { BsExclamationTriangle, BsCheckCircle } from "react-icons/bs";
import styled from "styled-components";
import NavButtons from "./NavButtons";

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  p {
    align-self: flex-start;
  }

  svg {
    font-size: 5rem;
    padding: 1rem;
  }

  path {
    fill: ${(props) => (props.switch ? "orange" : "rgb(79,178,134)")};
  }

  @media (max-width: 360px) {
    padding: 1rem;

    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 0;
    padding-top: 0;
  }

  @media (min-width: 1200px) {
    svg {
      font-size: 8rem;
      padding: 2rem;
    }
  }
`;

const StyledBillImpact = styled.div`
  align-self: flex-start;
`;

const Result = (props) => {
  const {
    currentRate,
    milesDriven,
    hoursCharging,
    resultsReady,
    currentStep,
    changeCurrentStep,
    changeResultsReady,
    onCloseModal,
  } = props;

  const solveForBillImpact = () => {
    if (currentRate === "A") {
      return {
        billImpactRateA: (
          combinedRateFlat(milesDriven) - initialRateFlat
        ).toFixed(2),
        billImpactRateB: (
          combinedRateTOU(milesDriven, hoursCharging) - initialRateFlat
        ).toFixed(2),
      };
    } else {
      return {
        billImpactRateA: (
          combinedRateFlat(milesDriven) - initialRateTOU
        ).toFixed(2),
        billImpactRateB: (
          combinedRateTOU(milesDriven, hoursCharging) - initialRateTOU
        ).toFixed(2),
      };
    }
  };

  const impactRateA = solveForBillImpact().billImpactRateA;
  const impactRateB = solveForBillImpact().billImpactRateB;

  const renderBillImpacts = () => {
    return (
      <>
        <StyledBillImpact>
          <p>
            Bill impact of charging your electric vehicle on a flat rate of
            $0.15/kWh. (Rate A):{" "}
            <b>
              {impactRateA[0] === "-" ? "-" : "+"}$
              {Math.abs(impactRateA).toFixed(2)}
            </b>
          </p>
        </StyledBillImpact>
        <StyledBillImpact>
          <p>
            Bill impact of charging your electric vehicle on a TOU rate of
            $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise (Rate B):{" "}
            <b>
              {impactRateB[0] === "-" ? "-" : "+"}$
              {Math.abs(impactRateB).toFixed(2)}
            </b>
          </p>
        </StyledBillImpact>
      </>
    );
  };

  return (
    <div>
      {currentRate === "A" ? (
        Number(impactRateA) > Number(impactRateB) ? (
          <StyledResult switch>
            <BsExclamationTriangle />
            <p>
              You should switch rates to <b>Rate B</b>, a TOU rate of $0.20/kWh
              between noon and 6pm, and $0.08/kWh otherwise. You could save{" "}
              <i>${(Number(impactRateA) - Number(impactRateB)).toFixed(2)}</i>{" "}
              on your bill!
            </p>
            {renderBillImpacts()}
          </StyledResult>
        ) : (
          <StyledResult stay>
            <BsCheckCircle />
            <p>
              You should stick with <b>Rate A</b>, a flat rate of $0.15/kWh.
              You're already on the cheapest rate!
            </p>
            {renderBillImpacts()}
          </StyledResult>
        )
      ) : Number(impactRateB) > Number(impactRateA) ? (
        <StyledResult switch>
          <BsExclamationTriangle />
          <p>
            You should switch rates to <b>Rate A</b>, a flat rate of $0.15/kWh.
            You could save{" "}
            <i>${(Number(impactRateB) - Number(impactRateA)).toFixed(2)}</i> on
            your bill!
          </p>
          {renderBillImpacts()}
        </StyledResult>
      ) : (
        <StyledResult stay>
          <BsCheckCircle />
          <p>
            You should stick with <b>Rate B</b>, a TOU rate of $0.20/kWh between
            noon and 6pm, and $0.08/kWh otherwise. You're already on the
            cheapest rate!
          </p>
          {renderBillImpacts()}
        </StyledResult>
      )}
      <NavButtons
        resultsReady={resultsReady}
        currentStep={currentStep}
        changeCurrentStep={changeCurrentStep}
        changeResultsReady={changeResultsReady}
        resultButton={true}
        onCloseModal={onCloseModal}
      />
    </div>
  );
};

export default Result;
