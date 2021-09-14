import { FlexRow } from "../../components";
import {
  Apple,
  Cake,
  Cocktail,
  IceCream,
  Lollipop,
  Pear,
  Toast,
  Watermelon,
} from "../../components/svg";
import React, { FC } from "react";
import Link from "next/link";
import { Chest } from "../../components/Chest";

const BoxesPage: FC = () => {
  const boxes = [
    {
      chestSvg: <Watermelon width={300} height={300} />,
      name: "Watermelon",
    },
    { chestSvg: <Apple width={300} height={300} />, name: "Apple" },
    { chestSvg: <Pear width={300} height={300} />, name: "Pear" },
    { chestSvg: <Toast width={300} height={300} />, name: "Toast" },
    { chestSvg: <IceCream width={300} height={300} />, name: "Ice cream" },
    { chestSvg: <Lollipop width={300} height={300} />, name: "Lollipop" },
    { chestSvg: <Cake width={300} height={300} />, name: "Cake" },
    {
      chestSvg: <Cocktail width={300} height={300} />,
      name: "Cocktail",
    },
  ];

  return (
    <FlexRow>
      {boxes.map((box, index) => {
        return (
          <FlexRow key={index} style={{ cursor: "pointer" }}>
            <Link href={`/boxes/${box.name.toLowerCase()}`}>
              <Chest chestSvg={box.chestSvg} name={box.name} key={box.name} />
            </Link>
          </FlexRow>
        );
      })}
    </FlexRow>
  );
};

export default BoxesPage;
