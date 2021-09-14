import { Item, BlizzItem, BlizzSearchItem, SearchItem } from "../types";
import { randomNumber } from "./randomNumber";

export const itemReducer = (item: BlizzItem): Item => {
  return {
    id: item.id,
    name: item.name,
    quality: item.quality.name,
    requiredLevel: item.required_level,
    itemClass: item.item_class.name,
    itemSubClass: item.item_subclass.name,
    hand: item.inventory_type.name,
    media: item.media,
    dropRate: randomNumber(0.001, 0.8, 2),
    price: randomNumber(100, 10000),
  };
};

export const searchItemReducer = (item: BlizzSearchItem): SearchItem => {
  return {
    id: item.id,
    name: item.name.en_US,
    price: item.purchase_price,
    requiredLevel: item.required_level,
    quality: item.quality.name.en_US,
    dropRate: randomNumber(0.001, 0.8),
  };
};
