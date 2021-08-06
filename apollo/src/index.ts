import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { WowApi } from "./dataSources/wowApi";
import { DataSources } from "apollo-server-core/dist/graphqlOptions";

interface CustomDataSources {
  wowApi: WowApi;
}

const credentials = {
  region: "us",
  clientId: "fa6b528e357b499a9ceedb0cad847859",
  clientSecret: "NjrRcz82YOyPJOdw5RtUpCB4HYbhG5yL",
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      wowApi: new WowApi(credentials),
    } as DataSources<CustomDataSources>;
  },
  introspection: true,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev\`)
  `);
});
