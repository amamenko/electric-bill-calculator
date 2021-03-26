import React from "react";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";
import Slider from "rc-slider";
import "react-responsive-modal/styles.css";
import "rc-slider/assets/index.css";
import "../../App.css";
import { SliderHandle } from "./SliderHandle";

const StyledStep = styled.div`
  color: rgb(100, 100, 100);
`;

const StyledQuestion = styled.h3`
  text-align: center;
  padding: 3rem 0;
  font-size: 2rem;
`;

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
  background: ${(props) => (props.currentRate ? "rgb(8, 146, 208)" : "#fff")};
  color: ${(props) => (props.currentRate ? "#fff" : "#000")};
  transition: color 0.5s ease;

  &:hover {
    cursor: ${(props) => (props.currentRate ? "auto" : "pointer")};
    background: ${(props) =>
      props.currentRate ? "rgb(8, 146, 208)" : "rgba(8, 146, 208, 0.2)"};
    transition: background 0.5s ease;
  }

  h4 {
    font-size: 1.5rem;
  }
`;

const StyledBottomButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const StyledButton = styled.div`
  width: 100%;
  background: ${(props) =>
    props.currentRate ? "rgb(79,178,134)" : "rgba(79,178,134, 0.5)"};
  transition: background 0.5s ease;
  color: #fff;
  text-align: center;
  margin-top: 5rem;

  &:hover {
    cursor: ${(props) => (props.currentRate ? "pointer" : "auto")};
  }

  p {
    font-weight: 600;
    font-size: 1.3rem;
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
  } = props;

  const handleSelectAnswerA = () => {
    changeCurrentRate("A");
  };

  const handleSelectAnswerB = () => {
    changeCurrentRate("B");
  };

  const handleNextStep = () => {
    changeCurrentStep(currentStep + 1);
  };

  const handleSliderChange = (val) => {
    changeMilesDriven(val);
  };

  return (
    <Modal open={modalOpen} onClose={onCloseModal} center>
      <div>
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
        {currentStep === 1 ? (
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
                A TOU rate of $0.20/kWh between noon and 6pm, and $0.08/kWh
                otherwise
              </p>
            </StyledIndividualAnswerContainer>
          </StyledAnswersContainer>
        ) : (
          <Slider
            min={1000}
            max={100000}
            value={milesDriven}
            step={1000}
            marks={{ 1000: "1,000 miles", 100000: "100,000 miles" }}
            onChange={handleSliderChange}
            handle={SliderHandle}
          />
        )}
        <StyledBottomButtonContainer>
          <StyledButton currentRate={currentRate} onClick={handleNextStep}>
            <p>Next Step</p>
          </StyledButton>
        </StyledBottomButtonContainer>
      </div>
    </Modal>
  );
};

export default InputModal;
