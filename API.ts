/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBoxInput = {
  id?: string | null,
  title: string,
  itemIds?: Array< string | null > | null,
};

export type ModelBoxConditionInput = {
  title?: ModelStringInput | null,
  itemIds?: ModelStringInput | null,
  and?: Array< ModelBoxConditionInput | null > | null,
  or?: Array< ModelBoxConditionInput | null > | null,
  not?: ModelBoxConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Box = {
  __typename: "Box",
  id: string,
  title: string,
  itemIds?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBoxInput = {
  id: string,
  title?: string | null,
  itemIds?: Array< string | null > | null,
};

export type DeleteBoxInput = {
  id: string,
};

export type ModelBoxFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  itemIds?: ModelStringInput | null,
  and?: Array< ModelBoxFilterInput | null > | null,
  or?: Array< ModelBoxFilterInput | null > | null,
  not?: ModelBoxFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBoxConnection = {
  __typename: "ModelBoxConnection",
  items?:  Array<Box | null > | null,
  nextToken?: string | null,
};

export type CreateBoxMutationVariables = {
  input: CreateBoxInput,
  condition?: ModelBoxConditionInput | null,
};

export type CreateBoxMutation = {
  createBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBoxMutationVariables = {
  input: UpdateBoxInput,
  condition?: ModelBoxConditionInput | null,
};

export type UpdateBoxMutation = {
  updateBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBoxMutationVariables = {
  input: DeleteBoxInput,
  condition?: ModelBoxConditionInput | null,
};

export type DeleteBoxMutation = {
  deleteBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBoxQueryVariables = {
  id: string,
};

export type GetBoxQuery = {
  getBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBoxesQueryVariables = {
  filter?: ModelBoxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoxesQuery = {
  listBoxes?:  {
    __typename: "ModelBoxConnection",
    items?:  Array< {
      __typename: "Box",
      id: string,
      title: string,
      itemIds?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBoxSubscription = {
  onCreateBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBoxSubscription = {
  onUpdateBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBoxSubscription = {
  onDeleteBox?:  {
    __typename: "Box",
    id: string,
    title: string,
    itemIds?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
