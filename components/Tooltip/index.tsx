import styled from "styled-components";
import { FC, useState } from "react";

type Props = {
  text: string;
};

export const Tooltip: FC<Props> = ({ children, text, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <TooltipContainer>
      {show ? (
        <TooltipVisible>
          {text}
          <TooltipArrow />
        </TooltipVisible>
      ) : (
        <TooltipBox>
          {text}
          <TooltipArrow />
        </TooltipBox>
      )}
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </TooltipContainer>
  );
};

const TooltipContainer = styled.div`
  position: relative;
`;

const TooltipBox = styled.div`
  background: slategrey;
  color: red;
  padding: 0.2rem;
  border-radius: 5px;
  top: calc(100% + 5px);
  display: none;
`;

const TooltipVisible = styled.div`
  display: block;
`;

const TooltipArrow = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
`;
