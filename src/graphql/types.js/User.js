export default {
  Type: `
  type User {
    id: String!
    name: String!
  }
  `,
  Mutation: `
    addUser(name: String!): User!
    
    editUser(
      id: String!,
      name: String!
    ): User
     
    deleteUser(
      id: String!,
      ): Boolean
  `,
};
