import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefinitions = /* GraphQL */ `
  type Person {
    id: Int!
    name: String!
    username: String!
    age: Int!
    email: String
  }

  type Query {
    hello: String!
    person(id: Int!): Person
    people: [Person]!
    sortFromYoungToOld: [Person]!
  }
`;


 


export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
});
