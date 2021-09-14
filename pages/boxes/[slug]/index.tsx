import { useRouter } from "next/router";
import {
  AutoSlider,
  Card,
  FlexCol,
  FlexRow,
  Flippable,
} from "../../../components";
import { useFetchItems } from "../../../hooks/useFetchItems";
import { useState } from "react";
import { Item } from "../../../apollo/src/types";
import { oreIds } from "../../../utils/mock-db/ore-ids";

const SingularBox = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [items, { loading }] = useFetchItems(oreIds);
  const [winnerItems, setWinnerItems] = useState<Item[]>([]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <FlexCol>
      <h1>Box of {slug}</h1>
      <FlexCol>
        <FlexRow>
          <Flippable back={<Card />} front={<Card item={items[2]} />} />
        </FlexRow>
        <FlexRow>
          <Flippable back={<Card />} front={<Card item={items[5]} />} />
          <Flippable back={<Card />} front={<Card item={items[6]} />} />
        </FlexRow>
        <FlexRow>
          <Flippable back={<Card />} front={<Card item={items[7]} />} />
          <Flippable back={<Card />} front={<Card item={items[8]} />} />
          <Flippable back={<Card />} front={<Card item={items[9]} />} />
        </FlexRow>
      </FlexCol>
    </FlexCol>
  );
};

export default SingularBox;
