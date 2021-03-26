import React from "react";
import { initialRateFlat } from "./rates/homeLoad/initialRateFlat";
import { initialRateTOU } from "./rates/homeLoad/initialRateTOU";
import { evRateFlat } from "./rates/electricVehicle/evRateFlat";
import { evRateTOU } from "./rates/electricVehicle/evRateTOU";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Bolt from "./components/Bolt";
import IntroText from "./components/IntroText";
import CTA from "./components/CTA";

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
`;

const App = () => {
  return (
    <StyledAppContainer>
      <Navbar />
      <Bolt />
      <IntroText />
      <CTA />
    </StyledAppContainer>
  );
};

export default App;
