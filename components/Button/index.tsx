import React, { FC } from "react";
import styled from "styled-components";

export const Button: FC<React.HTMLProps<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonContainer onClick={rest.onClick} style={rest.style}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  background-image: linear-gradient(
    to right,
    #606c88 0%,
    #3f4c6b 51%,
    #606c88 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
