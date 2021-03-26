import React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import { SliderHandle } from "./SliderHandle";

const StyledAnswersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const StyledIndividualAnswerContainer = styled.div`
  border: 1px solid rgb(175, 175, 175);
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.currentRate || props.selectedCharging ? "rgb(8, 146, 208)" : "#fff"};
  color: ${(props) =>
    props.currentRate || props.selectedCharging ? "#fff" : "#000"};
  transition: color 0.5s ease;

  &:hover {
    cursor: ${(props) =>
      props.currentRate || props.selectedCharging ? "auto" : "pointer"};
    background: ${(props) =>
      props.currentRate || props.selectedCharging
        ? "rgb(8, 146, 208)"
        : "rgba(8, 146, 208, 0.2)"};
    transition: background 0.5s ease;
  }

  h4 {
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    p {
      font-size: 0.5rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 150px;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 120px;

    p {
      font-size: 0.3rem;
      padding: 0rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

const UserSelection = (props) => {
  const {
    currentStep,
    currentRate,
    changeCurrentRate,
    milesDriven,
    changeMilesDriven,
    hoursCharging,
    changeHoursCharging,
  } = props;

  const handleSelectAnswerA = () => {
    changeCurrentRate("A");
  };

  const handleSelectAnswerB = () => {
    changeCurrentRate("B");
  };

  const handleSliderChange = (val) => {
    changeMilesDriven(val);
  };

  const handleSelectPeak = () => {
    changeHoursCharging("peak");
  };

  const handleSelectOffPeak = () => {
    changeHoursCharging("off-peak");
  };

  return currentStep === 1 ? (
    <StyledAnswersContainer>
      <StyledIndividualAnswerContainer
        currentRate={currentRate === "A"}
        onClick={handleSelectAnswerA}
      >
        <h4>Rate A</h4>
        <p>A flat rate of $0.15/kWh</p>
      </StyledIndividualAnswerContainer>
      <StyledIndividualAnswerContainer
        currentRate={currentRate === "B"}
        onClick={handleSelectAnswerB}
      >
        <h4>Rate B</h4>
        <p>
          A TOU rate of $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise
        </p>
      </StyledIndividualAnswerContainer>
    </StyledAnswersContainer>
  ) : currentStep === 2 ? (
    <Slider
      min={1000}
      max={100000}
      value={milesDriven}
      step={1000}
      marks={{ 1000: "1,000 miles", 100000: "100,000 miles" }}
      onChange={handleSliderChange}
      handle={SliderHandle}
    />
  ) : (
    <StyledAnswersContainer>
      <StyledIndividualAnswerContainer
        selectedCharging={hoursCharging === "peak"}
        onClick={handleSelectPeak}
      >
        <h4>Peak</h4>
        <p>Between noon and 6pm</p>
      </StyledIndividualAnswerContainer>
      <StyledIndividualAnswerContainer
        selectedCharging={hoursCharging === "off-peak"}
        onClick={handleSelectOffPeak}
      >
        <h4>Off-Peak</h4>
        <p>After 6pm and before noon</p>
      </StyledIndividualAnswerContainer>
    </StyledAnswersContainer>
  );
};

export default UserSelection;
