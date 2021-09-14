import React, { Dispatch, FC, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Button, Card, FlexCol, FlexRow } from "..";
import { useInterval } from "../../utils/useInterval";
import { Item } from "../../apollo/src/types";
import Link from "next/link";

type Props = {
  items: Item[];
  setWinners: Dispatch<SetStateAction<Item[]>>;
};

export const AutoSlider: FC<Props> = ({ items, setWinners }) => {
  const [itemIndex, setItemIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [winners] = useState<Item[]>([]);

  const start = () => {
    if (isRunning) {
      setItemIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const stop = () => {
    if (isRunning) {
      winners.push(items[itemIndex]);
      setIsRunning(false);
      setWinners(winners);
    } else {
      return;
    }
  };

  useInterval(start, 300, 3);
  useInterval(stop, 5000, 3);

  return (
    <>
      <Slideshow>
        <SlideshowSlider
          index={itemIndex}
          style={{ transform: `translate3d(${-itemIndex * 100}%, 0, 0)` }}
        >
          {items &&
            items.map((item, index) => {
              return (
                <Slide key={index}>
                  <Card item={item} />
                </Slide>
              );
            })}
        </SlideshowSlider>
      </Slideshow>
      <FlexCol>
        <FlexRow>
          <Button
            onClick={() => setIsRunning(!isRunning)}
            style={{ display: `${isRunning ? "none" : "flex"}` }}
          >
            Open chest
          </Button>
          <Link href="/">
            <Button>Go back</Button>
          </Link>
        </FlexRow>
      </FlexCol>
    </>
  );
};

const Slideshow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 182px;
`;

const Slide = styled.div`
  display: inline-block;
  width: 182px;
`;

interface SlideshowSliderProps {
  readonly index: number;
}

const SlideshowSlider = styled.div<SlideshowSliderProps>`
  white-space: nowrap;
  transition: ease 300ms;
`;
