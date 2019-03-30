export default {
  Type: `
    type Travel {
      id: String!
      driver: User
      members: [User]
      locations: [Location]
      startAt: String
      endAt: String
    }
    `,
  Mutation: `
    addTravel(
      driver: String,
      locations: [String]!,
      members: [String]!,
      startAt: String,
      endAt: String!,
    ): Travel
  
    editTravel(
      id: String!,
      driver: String,
      locations: [String]!,
      members: [String]!,
      startAt: String,
      endAt: String!,
    ): Travel
  
    deleteTravel(
      id: String!,
    ): Boolean
    `,
};
