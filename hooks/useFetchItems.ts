import { ApolloError, gql, useQuery } from "@apollo/client";
import { Item } from "../apollo/src/types";

const GET_ITEMS = gql`
  query ItemSummaries($itemSummariesIds: [ID]!) {
    itemSummaries(ids: $itemSummariesIds) {
      id
      name
      quality
      requiredLevel
      itemClass
      itemSubClass
      hand
      media
      price
      dropRate
    }
  }
`;

export const useFetchItems = (ids: string[]): UseFetchItemsResponse => {
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: {
      itemSummariesIds: ids,
    },
  });
  const items = data?.itemSummaries;
  return [items, { loading, error }];
};

type UseFetchItemsResponse = [
  Item[],
  {
    error?: ApolloError;
    loading: boolean;
  }
];
