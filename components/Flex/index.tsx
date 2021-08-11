import styled from "styled-components";
import React from "react";

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-flow: wrap row;
  margin: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FlexCol = styled((props) => <FlexRow {...props} />)`
  flex-direction: column;
`;
