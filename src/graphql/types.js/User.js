export default {
  Type: `
  type User {
    id: String!
    name: String!
    email: String!
    password: String!
  }
  `,
  Mutation: `
    addUser(
      name: String!
      email: String!
      password: String!
    ): User!
    
    editUser(
      id: String!,
      name: String!
    ): User
     
    deleteUser(
      id: String!,
      ): Boolean
  `,
};
