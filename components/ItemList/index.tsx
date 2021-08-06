import { FC } from "react";
import { Card } from "../Card";
import { animated, config, useTransition } from "@react-spring/web";
import { Item } from "../../apollo/src/types";

type Props = {
  items: Item[];
  onRemove?: (i: string) => void;
};

export const ItemList: FC<Props> = ({ items, onRemove }) => {
  console.log(items);
  const listTransitions = useTransition(items, {
    config: config.gentle,
    from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
    enter: { opacity: 1, transform: "translate3d(5%, 0px, 0px)" },
    leave: { opacity: 0, height: 0, transform: "translate3d(25%, 0px, 0px)" },
    keys: items.map((item, index) => index),
  });

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "space-evenly",
        maxHeight: "700px",
        overflow: "hidden",
      }}
    >
      <div style={{ overflowY: "scroll" }}>
        {listTransitions((styles, item, _, index) => (
          <animated.div style={styles}>
            <Card
              item={item}
              onRemove={() => (onRemove ? onRemove(String(index)) : null)}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};
