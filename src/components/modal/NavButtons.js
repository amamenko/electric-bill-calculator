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
      : props.currentRate || props.hoursCharging || props.resultButton
      ? "rgb(79,178,134)"
      : "rgba(79,178,134, 0.5)"};
  pointer-events: ${(props) =>
    props.previousStep
      ? "auto"
      : props.currentRate || props.hoursCharging || props.resultButton
      ? "auto"
      : "none"};
  transition: background 0.5s ease;
  color: ${(props) => (props.previousStep ? "#000" : "#fff")};
  text-align: center;
  margin-top: 4rem;

  &:hover {
    cursor: ${(props) =>
      props.resultButton
        ? "pointer"
        : props.currentRate || props.hoursCharging
        ? "pointer"
        : "auto"};
  }

  p {
    font-weight: 600;
    font-size: 1.3rem;
  }

  @media (max-width: 420px) {
    margin-top: ${(props) => (props.resultButton ? "2rem" : "4rem")};

    p {
      font-size: 1rem;
    }
  }
`;

const NavButtons = (props) => {
  const {
    currentStep,
    changeCurrentStep,
    currentRate,
    hoursCharging,
    changeResultsReady,
    resultsReady,
    resultButton,
    onCloseModal,
  } = props;

  const handlePreviousStep = () => {
    changeCurrentStep(currentStep - 1);

    if (resultsReady) {
      changeResultsReady(false);
    }
  };

  const handleNextStep = () => {
    changeCurrentStep(currentStep + 1);
  };

  const handleGetResults = () => {
    changeCurrentStep(currentStep + 1);

    if (!resultsReady) {
      changeResultsReady(true);
    }
  };

  return (
    <StyledBottomButtonsContainer>
      {currentStep > 1 ? (
        <StyledButton
          previousStep
          resultButton={resultButton}
          currentRate={currentRate}
          onClick={handlePreviousStep}
        >
          <p>{resultsReady ? "Edit Choices" : "Previous Step"}</p>
        </StyledButton>
      ) : null}
      {currentStep === 3 ? (
        <StyledButton hoursCharging={hoursCharging} onClick={handleGetResults}>
          <p>Evaluate</p>
        </StyledButton>
      ) : (
        <StyledButton
          resultButton={resultButton}
          currentRate={currentRate}
          onClick={resultsReady ? onCloseModal : handleNextStep}
        >
          <p>{resultsReady ? "Back to Home" : "Next Step"}</p>
        </StyledButton>
      )}
    </StyledBottomButtonsContainer>
  );
};

export default NavButtons;
