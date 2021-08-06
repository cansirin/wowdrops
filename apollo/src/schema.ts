import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    itemSummary(id: ID!): Item!
    itemSummaries(ids: [ID]!): [Item]!
    searchItem(name: String!): [Item]
    getAccessToken: String
  }
  # id:19019 Thunderfury, Blessed Blade of the Windseeker
  type Item {
    id: ID
    name: String
    quality: String
    requiredLevel: Int
    # itemClass: weapon
    itemClass: String
    # itemSubClass: sword
    itemSubClass: String
    # hand: 1H
    hand: String
    # media: Item's icon
    media: String
    #price: Item's price
    price: String
    # dropRate: Item's drop rate
    dropRate: Float
  }
`;
