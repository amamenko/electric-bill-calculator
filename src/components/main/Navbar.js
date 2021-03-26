import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #fff;
  z-index: 999;

  h1 {
    color: rgb(100, 100, 100);
    margin-top: 1rem;
    margin-left: 2rem;
    padding: 0;
    font-size: 1.5rem;

    @media (max-width: 374px) {
      font-size: 1.1rem;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <h1>Electric Rate Picker</h1>
    </StyledNavBar>
  );
};

export default Navbar;
