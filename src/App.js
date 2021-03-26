import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/main/Navbar";
import Bolt from "./components/main/Bolt";
import IntroText from "./components/main/IntroText";
import CTA from "./components/main/CTA";
import InputModal from "./components/modal/InputModal";
import "./App.css";

const StyledAppContainer = styled.div`
  height: 80vh;
  margin-bottom: 5rem;
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 2rem;
  padding-right: 2rem;
  position: relative;
`;

const App = () => {
  const [modalOpen, changeModalOpen] = useState(false);
  const [currentStep, changeCurrentStep] = useState(1);
  const [milesDriven, changeMilesDriven] = useState(1000);
  const [hoursCharging, changeHoursCharging] = useState("");
  const [currentRate, changeCurrentRate] = useState("");
  const [resultsReady, changeResultsReady] = useState(false);

  const onOpenModal = () => changeModalOpen(true);
  const onCloseModal = () => {
    changeModalOpen(false);
    changeCurrentStep(1);
    changeMilesDriven(1000);
    changeHoursCharging("");
    changeCurrentRate("");
    changeResultsReady(false);
  };

  return (
    <StyledAppContainer>
      <InputModal
        currentStep={currentStep}
        changeCurrentStep={changeCurrentStep}
        currentRate={currentRate}
        changeCurrentRate={changeCurrentRate}
        milesDriven={milesDriven}
        changeMilesDriven={changeMilesDriven}
        hoursCharging={hoursCharging}
        changeHoursCharging={changeHoursCharging}
        modalOpen={modalOpen}
        onCloseModal={onCloseModal}
        resultsReady={resultsReady}
        changeResultsReady={changeResultsReady}
      />
      <Navbar />
      <Bolt />
      <IntroText />
      <CTA onOpenModal={onOpenModal} />
    </StyledAppContainer>
  );
};

export default App;
