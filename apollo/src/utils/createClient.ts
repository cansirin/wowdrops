import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const appSyncGqlUrl =
  "https://du2tsbc3vjhann3dribgooyeiu.appsync-api.us-west-2.amazonaws.com/graphql";

const blizzGqlUrl = "http://localhost:4000/graphql";

const directionalLink = new ApolloLink().split(
  (operation) => operation.getContext().endPoint === "blizz",
  new HttpLink({ uri: blizzGqlUrl }),
  new HttpLink({ uri: appSyncGqlUrl })
);

export const createClient = () => {
  const cache = new InMemoryCache();
  return new ApolloClient<NormalizedCacheObject>({
    cache,
    link: ApolloLink.from([errorLink, directionalLink]),
  });
};
