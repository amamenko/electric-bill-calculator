import React from "react";
import styled from "styled-components";

const StyledTextContainer = styled.div`
  margin: 2rem 0;

  p {
    font-size: 1.1rem;
  }

  @media (max-width: 374px) {
    margin: 0;
    margin-bottom: 2rem;

    h2 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1200px) and (orientation: landscape) {
    margin: 0;
    margin-bottom: 2rem;
  }

  @media (min-width: 1200px) {
    margin: 4rem 0;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const IntroText = () => {
  return (
    <StyledTextContainer>
      <h2>Find the cheapest electric rate for you!</h2>
      <p>
        Are you a homeowner? Do you own an electric vehicle or are thinking
        about owning one? If so, then you've come to the right place.
      </p>
      <p>
        This tool will help you find the cheapest rate between <b>Rate A</b>, a
        flat $0.15/kWh rate, and <b>Rate B</b>, a time-of-use (TOU) rate of
        $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise.
      </p>
    </StyledTextContainer>
  );
};

export default IntroText;
