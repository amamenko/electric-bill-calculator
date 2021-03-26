import React from "react";
import styled from "styled-components";

const StyledBottomButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const StyledButton = styled.div`
  width: 100%;
  background: ${(props) =>
    props.previousStep
      ? "#dedede"
      : props.currentRate || props.hoursCharging
      ? "rgb(79,178,134)"
      : "rgba(79,178,134, 0.5)"};
  transition: background 0.5s ease;
  color: ${(props) => (props.previousStep ? "#000" : "#fff")};
  text-align: center;
  margin-top: 4rem;

  &:hover {
    cursor: ${(props) =>
      props.currentRate || props.hoursCharging ? "pointer" : "auto"};
  }

  p {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

const NavButtons = (props) => {
  const { currentStep, changeCurrentStep, currentRate, hoursCharging } = props;

  const handlePreviousStep = () => {
    changeCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    changeCurrentStep(currentStep + 1);
  };

  return (
    <StyledBottomButtonsContainer>
      {currentStep > 1 ? (
        <StyledButton
          previousStep
          currentRate={currentRate}
          onClick={handlePreviousStep}
        >
          <p>Previous Step</p>
        </StyledButton>
      ) : null}
      {currentStep === 3 ? (
        <StyledButton hoursCharging={hoursCharging} onClick={handleNextStep}>
          <p>Evaluate</p>
        </StyledButton>
      ) : (
        <StyledButton currentRate={currentRate} onClick={handleNextStep}>
          <p>Next Step</p>
        </StyledButton>
      )}
    </StyledBottomButtonsContainer>
  );
};

export default NavButtons;
