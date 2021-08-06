import { Item } from "./types";
import { WowApi } from "./dataSources/wowApi";

export interface CustomDataSources {
  wowApi: WowApi;
}

export interface CustomResolversContext {
  dataSources: CustomDataSources;
}

const staticOptions = { namespace: "static-us", locale: "en_US" };

export const resolvers = {
  Query: {
    getAccessToken: (_: never, __: never, context: CustomResolversContext) => {
      return context.dataSources.wowApi.getAccessToken();
    },

    itemSummary: async (
      _: never,
      { id }: { id: string },
      context: CustomResolversContext
    ): Promise<Item> => {
      return await context.dataSources.wowApi.getItem(staticOptions, id);
    },

    itemSummaries: async (
      _: never,
      { ids }: { ids: string[] },
      context: CustomResolversContext
    ): Promise<Item[]> => {
      return await context.dataSources.wowApi.getItems(staticOptions, ids);
    },

    searchItem: async (
      _: never,
      { name }: { name: string },
      context: CustomResolversContext
    ): Promise<Item[]> => {
      return await context.dataSources.wowApi.searchItems(staticOptions, {
        name,
        orderBy: "id",
        pageNumber: 1,
      });
    },
  },
};
