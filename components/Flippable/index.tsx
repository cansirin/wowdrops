import React, { FC, ReactNode, useState } from "react";
import { a, config, useSpring } from "@react-spring/web";

type Props = {
  back: ReactNode;
  front: ReactNode;
};

export const Flippable: FC<Props> = ({ back, front }): JSX.Element => {
  const [isFrontFaced, setIsFrontFaced] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: isFrontFaced ? 1 : 0,
    transform: `rotateX(${isFrontFaced ? 180 : 0}deg)`,
    config: config.gentle,
  });

  return (
    <div onClick={() => setIsFrontFaced(!isFrontFaced)}>
      {isFrontFaced ? (
        <a.div
          style={{
            opacity,
            transform,
            rotateX: "180deg",
          }}
        >
          {front}
        </a.div>
      ) : (
        <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
          {back}
        </a.div>
      )}
    </div>
  );
};
