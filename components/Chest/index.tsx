import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  chestSvg: JSX.Element;
  name: string;
};

export const Chest: FC<Props> = React.forwardRef((props, ref) => {
  return (
    <ChestContainer {...props}>
      {props.chestSvg}
      {props.name}
    </ChestContainer>
  );
});

const ChestContainer = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  list-style: none;
  padding: 0.6rem;
  margin: 0.5rem;
  height: 15rem;
`;
