import React from "react";
import styled from "styled-components";

const StyledCTA = styled.button`
  background: #4fb286;
  color: #fff;
  border: none;
  padding: 1rem 3rem;
  font: inherit;
  width: 100%;
  cursor: pointer;

  p {
    padding: 0;
    margin: 0;
    font-weight: 600;

    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }
`;

const CTA = (props) => {
  const { onOpenModal } = props;

  return (
    <StyledCTA onClick={onOpenModal}>
      <p>Get Started</p>
    </StyledCTA>
  );
};

export default CTA;
