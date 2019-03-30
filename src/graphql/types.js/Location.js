export default {
  Type: `
    type Location {
      id: String!
      address: String!
    }
    `,
  Mutation: `
    deleteLocation(
      id: String!,
    ): Boolean
      
    editLocation(
      id: String!,
      address: String!
    ): Location
        
    addLocation(
      address: String!
    ): Location!
  `,
};
