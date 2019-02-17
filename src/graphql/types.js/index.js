import { gql } from 'apollo-server';

const Query = `type Query {
  user(id: String, name: String): User
  location(id: String, address: String): Location
  travel(id: String, members:[String!], driver: String, locations: [String!]): Travel
  group(id: String, members: [String!], isPrivate: Boolean, travels: [String!]): Group
  users(id: String, name: String): [User]
  locations: [Location]
  travels: [Travel]
  groups: [Group]
}`;

const Mutation = `type Mutation {
  addUser(name: String!): User!

  addLocation(
    address: String!
  ): Location!

  addTravel(
    driver: String,
    locations: [String]!,
    members: [String]!,
    startAt: String,
    endAt: String!,
  ): Travel

  addGroup(
    isPrivate: Boolean!,
    members: [String]!,
    travels: [String]!,
  ): User

  editUser(
    id: String!,
    name: String!
  ): User

  editLocation(
    id: String!,
    address: String!
  ): Location

  editTravel(
    id: String!,
    driver: String,
    locations: [String]!,
    members: [String]!,
    startAt: String,
    endAt: String!,
  ): Travel

  editGroup(
    id: String!,
    isPrivate: Boolean!,
    members: [String]!,
    travels: [String]!,
  ): Group

  deleteUser(
    id: String!,
  ): Boolean

  deleteLocation(
    id: String!,
  ): Boolean

  deleteTravel(
    id: String!,
  ): Boolean

  deleteGroup(
    id: String!,
  ): Boolean
}`;

export default gql`
  type User {
    id: String!
    name: String!
  }

  type Location {
    id: String!
    address: String!
  }

  type Travel {
    id: String!
    driver: User
    members: [User]
    locations: [Location]
    startAt: String
    endAt: String
  }

  type Group {
    id: String!
    members: [User]
    isPrivate: Boolean
    travels: [Travel]
  }

  ${Query}

  ${Mutation}
`;
