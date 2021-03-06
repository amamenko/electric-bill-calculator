import React from "react";
import styled from "styled-components";
import { Handle } from "rc-slider";

export const SliderHandle = (props) => {
  const { value, dragging, index, ...rest } = props;

  return (
    <FlexHandle key={index} value={value} {...rest}>
      {<Value>{value} miles</Value>}
    </FlexHandle>
  );
};

const FlexHandle = styled(Handle)`
  display: flex;
  justify-content: center;
`;

const Value = styled.div`
  margin-top: -32px;
  white-space: nowrap;
  color: #0892d0;
  font-size: 16px;
  font-weight: bold;
`;
