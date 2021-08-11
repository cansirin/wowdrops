import React, { FC } from "react";
import { useFetchItems } from "../../hooks/useFetchItems";
import { oreIds } from "../../utils/mock-db/ore-ids";
import { Card, FlexRow } from "../../components";
import { Item } from "../../apollo/src/types";
import Link from "next/link";

const ItemsPage: FC = () => {
  const [items, { error }] = useFetchItems(oreIds);

  return (
    <FlexRow>
      {items?.map((item: Item) => {
        return (
          <FlexRow key={item.id} style={{ cursor: "pointer" }}>
            <Link href={`/items/${item.id}`}>
              <Card key={item.id} item={item} />
            </Link>
          </FlexRow>
        );
      })}
    </FlexRow>
  );
};

export default ItemsPage;
