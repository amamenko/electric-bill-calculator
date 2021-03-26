import React from "react";
import { FcElectricity } from "react-icons/fc";
import styled from "styled-components";

const StyledBoltContainer = styled.div`
  position: relative;
  font-size: 10rem;
  margin-top: 5rem;
  max-height: 150px;

  @media (max-width: 374px) {
    font-size: 8rem;
    margin-top: 8rem;
  }

  @media (max-width: 599px) and (orientation: landscape) {
    font-size: 8rem;
    margin-top: 22rem;
  }

  @media (min-width: 600px) and (max-width: 900px) and (orientation: landscape) {
    font-size: 8rem;
    margin-top: 15rem;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    font-size: 12rem;
  }

  @media (min-width: 1200px) {
    font-size: 15rem;
  }

  path {
    fill: #0892d0;
  }
`;

const Bolt = () => {
  return (
    <StyledBoltContainer>
      <FcElectricity />
    </StyledBoltContainer>
  );
};

export default Bolt;
