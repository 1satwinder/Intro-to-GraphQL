const {ApolloServer, gql} = require('apollo-server');

//schema type definition
const typeDefs = gql`
  type SkiDay{
      id: ID!
      date: String!
      mountain: String!
      conditions: Conditions
  }

  enum Conditions{
      POWDER
      HEAVY
      ICE
      THIN
  }

  type Query {
      totalDays: Int!
      allDays: [SkiDay!]!
  }

  type Mutatation{
      removedDay(id: ID!): SkiDay!
  }
`;


const server = new ApolloServer({
    typeDefs,
    mocks:true,
    // resolvers
})

server.listen().then( ({url}) => console.log(`Server running at ${url}`))