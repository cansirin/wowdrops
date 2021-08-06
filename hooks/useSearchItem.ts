import { gql, useQuery } from "@apollo/client";

export const useSearchItem = (itemName: string) => {
  const { data, error, loading, refetch } = useQuery(SEARCH_ITEM, {
    variables: {
      searchItemName: itemName,
    },
  });

  const results = data?.searchItem;
  return [results, refetch, { error, loading }];
};

const SEARCH_ITEM = gql`
  query SearchItem($searchItemName: String!) {
    searchItem(name: $searchItemName) {
      price
      name
      id
      media
      quality
      dropRate
    }
  }
`;
