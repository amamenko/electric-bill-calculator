import React, { useState } from "react";
import { initialRateFlat } from "./rates/homeLoad/initialRateFlat";
import { initialRateTOU } from "./rates/homeLoad/initialRateTOU";
import { evRateFlat } from "./rates/electricVehicle/evRateFlat";
import { evRateTOU } from "./rates/electricVehicle/evRateTOU";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Bolt from "./components/Bolt";
import IntroText from "./components/IntroText";
import CTA from "./components/CTA";
import InputModal from "./components/InputModal";
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
  const [currentRate, changeCurrentRate] = useState("");

  const onOpenModal = () => changeModalOpen(true);
  const onCloseModal = () => changeModalOpen(false);

  return (
    <StyledAppContainer>
      <InputModal
        currentStep={currentStep}
        changeCurrentStep={changeCurrentStep}
        currentRate={currentRate}
        changeCurrentRate={changeCurrentRate}
        modalOpen={modalOpen}
        onCloseModal={onCloseModal}
      />
      <Navbar />
      <Bolt />
      <IntroText />
      <CTA onOpenModal={onOpenModal} />
    </StyledAppContainer>
  );
};

export default App;
