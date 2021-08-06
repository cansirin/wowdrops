import { BattleNetOptions, BlizzAPI } from "blizzapi";
import {
  BlizzSearchItem,
  BnetRequestOptions,
  Item,
  ItemSearchInputs,
} from "../types";
import { itemReducer, searchItemReducer } from "../utils/itemReducer";

export class WowApi {
  private readonly options: BattleNetOptions;
  private db: BlizzAPI;

  constructor(params: BattleNetOptions) {
    this.options = params;
    this.db = new BlizzAPI(this.options);
  }

  getAccessToken = () => {
    return this.db.getAccessToken();
  };

  getItemMedia = async (
    options: BnetRequestOptions,
    id: string
  ): Promise<string> => {
    const media = await this.db.query(
      `/data/wow/media/item/${id}?namespace=${options.namespace}&locale=${options.locale}`
    );
    return media.assets[0].value;
  };

  getItem = async (options: BnetRequestOptions, id: string): Promise<Item> => {
    const item = await this.db.query(
      `/data/wow/item/${id}?namespace=${options.namespace}&locale=${options.locale}`
    );
    const media = this.getItemMedia(options, id);

    return itemReducer({ ...item, media });
  };

  getItems = (options: BnetRequestOptions, ids: string[]): Promise<Item[]> => {
    return Promise.all(ids.map((id) => this.getItem(options, id)));
  };

  searchItems = async (
    options: BnetRequestOptions,
    { name, orderBy, pageNumber }: ItemSearchInputs
  ): Promise<Item[]> => {
    const items = await this.db.query(
      `/data/wow/search/item?namespace=${options.namespace}&name.en_US=${name}&orderby=${orderBy}&_page=${pageNumber}`
    );

    return items.results.map(async (item: { data: BlizzSearchItem }) => {
      const mediaUrl = await this.getItemMedia(options, item.data.id);
      return {
        ...searchItemReducer(item.data),
        media: mediaUrl,
      } as unknown as Item[];
    });
  };
}
