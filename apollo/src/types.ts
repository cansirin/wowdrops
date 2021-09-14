export type Item = {
  id?: string;
  name?: string;
  quality?: string;
  requiredLevel?: number;
  itemClass?: string;
  itemSubClass?: string;
  hand?: string;
  media?: string;
  price?: string | number;
  dropRate?: string | number;
};

export type BlizzItem = {
  id: string;
  name: string;
  quality: { name: string };
  required_level: number;
  item_class: { name: string };
  item_subclass: { name: string };
  inventory_type: { name: string };
  media: string;
};

export type BnetRequestOptions = {
  locale: string;
  namespace: string;
};

export type ItemSearchInputs = {
  name: string;
  orderBy?: OrderByOptions;
  pageNumber?: number;
};

export type OrderByOptions = "id" | "level";

export type BlizzSearchItem = {
  id: string;
  name: {
    en_US: string;
  };
  quality: {
    name: {
      en_US: string;
    };
  };
  purchase_price: number;
  required_level: number;
  media: { id: string };
};

export type SearchItem = {
  id: string;
  name: string;
  price: number;
  requiredLevel: number;
  quality: string;
  dropRate: number;
};
