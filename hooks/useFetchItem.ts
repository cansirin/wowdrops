import { gql, useQuery } from "@apollo/client";

const FETCH_ITEM = gql`
  query ItemSummary($itemSummaryId: ID!) {
    itemSummary(id: $itemSummaryId) {
      id
      name
      quality
      media
      itemClass
      itemSubClass
      hand
      price
      dropRate
    }
  }
`;

export const useFetchItem = (id: string | string[]) => {
  const { loading, error, data, refetch } = useQuery(FETCH_ITEM, {
    variables: {
      itemSummaryId: id,
      realmId: "47",
    },
    context: { endpoint: "blizz" },
  });
  const item = data?.itemSummary;
  return [item, refetch, { loading, error }];
};
