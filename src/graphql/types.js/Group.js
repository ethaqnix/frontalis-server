export default {
  Type:
  `
  type Group {
    id: String!
    members: [User]
    isPrivate: Boolean
    travels: [Travel]
  }
  `,
  Mutation: `
    addGroup(
      isPrivate: Boolean!,
      members: [String]!,
      travels: [String]!,
    ): User
  
    editGroup(
      id: String!,
      isPrivate: Boolean!,
      members: [String]!,
      travels: [String]!,
    ): Group
  
    deleteGroup(
      id: String!,
    ): Boolean
  `,
};
