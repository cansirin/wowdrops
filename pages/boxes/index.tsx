import { FlexRow } from "../../components";
import { Chest } from "../../components/Chest";
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
import { FC } from "react";
import Link from "next/link";

const BoxesPage: FC = () => {
  return (
    <>
      <h3>Summer</h3>
      <FlexRow>
        <Link href="">
          <Chest
            chestSvg={<Watermelon width={300} height={300} />}
            name="Watermelon"
          />
        </Link>
        <Chest chestSvg={<Apple width={300} height={300} />} name="Apple" />
        <Chest chestSvg={<Pear width={300} height={300} />} name="Pear" />
        <Chest
          chestSvg={<Cocktail width={300} height={300} />}
          name="Cocktail"
        />
        <Chest chestSvg={<Toast width={300} height={300} />} name="Toast" />
        <Chest
          chestSvg={<IceCream width={300} height={300} />}
          name="Ice Cream"
        />
        <Chest
          chestSvg={<Lollipop width={300} height={300} />}
          name="Lollipop"
        />
        <Chest chestSvg={<Cake width={300} height={300} />} name="Cake" />
      </FlexRow>
    </>
  );
};

export default BoxesPage;
