import AwsConfig from "../../../aws-exports";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
import { createAuthLink } from "aws-appsync-auth-link";

interface ApiKeyAuth {
  apiKey: string;
  type: AuthType.ApiKey;
}

interface CognitoAuth {
  jwtToken: () => Promise<string>;
  type: AuthType.Cognito;
}

type MixedAuth = CognitoAuth | ApiKeyAuth;

enum AuthType {
  Cognito = "AMAZON_COGNITO_USER_POOLS",
  ApiKey = "API_KEY",
}

export const createClient = () => {
  const appSyncGqlUrl = AwsConfig.aws_appsync_graphqlEndpoint;
  const blizzGqlUrl = "http://localhost:4000/graphql";
  const region = AwsConfig.aws_appsync_region;

  const auth: MixedAuth | null = {
    apiKey: AwsConfig.aws_appsync_apiKey,
    type: AuthType.ApiKey,
  };

  const authLink = createAuthLink({ url: appSyncGqlUrl, auth, region });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const directionalLink = new RetryLink().split(
    (operation) => operation.getContext().endpoint === "blizz",
    new HttpLink({ uri: blizzGqlUrl }),
    new HttpLink({ uri: appSyncGqlUrl })
  );

  const cache = new InMemoryCache();
  return new ApolloClient<NormalizedCacheObject>({
    cache,
    link: ApolloLink.from([authLink, errorLink, directionalLink]),
  });
};
