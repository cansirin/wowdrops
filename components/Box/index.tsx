import React, { useMemo, useState } from "react";
import { a, useSpring } from "@react-spring/web";
import Faker from "faker";
import { AutoSlider, Card, FlexCol, FlexRow } from "..";
import { Item } from "../../apollo/src/types";

export const Box = ({ items }: { items: Item[] }) => {
  const [flipped, setFlipped] = useState(false);
  const name = useMemo(() => Faker.name.firstName(), []);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <FlexCol>
      <h3 style={{ cursor: "pointer" }} onClick={() => setFlipped(!flipped)}>
        Box of {name}
      </h3>
      <a.div
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <FlexCol>
        <AutoSlider items={items} />
      </FlexCol>
      <a.div style={{ opacity, transform, rotateX: "180deg" }}>
        <FlexRow
          style={{
            border: "1px dashed bisque",
            display: `${flipped ? "flex" : "none"}`,
          }}
        >
          {items.map((item: Item, index: number) => {
            return <Card key={index} item={item} />;
          })}
        </FlexRow>
      </a.div>
    </FlexCol>
  );
};
