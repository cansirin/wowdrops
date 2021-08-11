import React, { useState } from "react";
import { useFetchItem } from "../hooks/useFetchItem";
import { Item } from "../apollo/src/types";
import { Card, FlexCol, FlexRow, ItemList, SearchBar } from "../components";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [data] = useFetchItem(query);
  const [addedItems, setAddedItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    const result = [...addedItems, item];
    setAddedItems(result);
  };

  const onClick = () => {
    addItem(data);
  };

  const handleRemove = (index: string) => {
    const newItems = addedItems.slice();
    newItems.splice(parseInt(index), 1);
    setAddedItems(newItems);
  };

  return (
    <FlexRow>
      <FlexCol>
        {data ? <Card item={data} /> : <p>Cant find</p>}
        <SearchBar query={query} setQuery={setQuery} onClick={onClick} />
      </FlexCol>

      <FlexCol>
        {addedItems.length > 0 ? (
          <ItemList items={addedItems} onRemove={handleRemove} />
        ) : (
          <div
            style={{
              border: "2px solid bisque",
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            No items yet
          </div>
        )}
      </FlexCol>
    </FlexRow>
  );
};

export default HomePage;
