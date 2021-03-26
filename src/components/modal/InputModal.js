import React from "react";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";
import "react-responsive-modal/styles.css";
import "rc-slider/assets/index.css";
import "../../App.css";
import NavButtons from "./NavButtons";
import UserSelection from "./UserSelection";
import Result from "./Result";

const StyledStep = styled.div`
  color: rgb(100, 100, 100);
`;

const StyledQuestion = styled.h3`
  text-align: center;
  padding: 3rem 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 2rem 1rem;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
    padding: 1rem 1rem;
  }
`;

const InputModal = (props) => {
  const {
    currentStep,
    changeCurrentStep,
    modalOpen,
    onCloseModal,
    currentRate,
    changeCurrentRate,
    milesDriven,
    changeMilesDriven,
    hoursCharging,
    changeHoursCharging,
    resultsReady,
    changeResultsReady,
  } = props;

  return (
    <Modal open={modalOpen} onClose={onCloseModal} center>
      {resultsReady ? (
        <Result
          currentRate={currentRate}
          milesDriven={milesDriven}
          hoursCharging={hoursCharging}
          resultsReady={resultsReady}
          currentStep={currentStep}
          changeCurrentStep={changeCurrentStep}
          changeResultsReady={changeResultsReady}
          onCloseModal={onCloseModal}
        />
      ) : (
        <>
          <StyledStep>
            <p>Step {currentStep} of 3</p>
          </StyledStep>
          <StyledQuestion>
            {currentStep === 1
              ? "Which rate are you currently on?"
              : currentStep === 2
              ? "How many miles will you drive per year?"
              : "What hours of the day do you plan to charge?"}
          </StyledQuestion>
          <UserSelection
            currentStep={currentStep}
            currentRate={currentRate}
            changeCurrentRate={changeCurrentRate}
            milesDriven={milesDriven}
            changeMilesDriven={changeMilesDriven}
            hoursCharging={hoursCharging}
            changeHoursCharging={changeHoursCharging}
          />
          <NavButtons
            currentStep={currentStep}
            changeCurrentStep={changeCurrentStep}
            currentRate={currentRate}
            hoursCharging={hoursCharging}
            changeResultsReady={changeResultsReady}
          />
        </>
      )}
    </Modal>
  );
};

export default InputModal;
