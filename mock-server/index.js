/**
 * GraphQL / iQL server
 *
 * @package: HoloREA
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2019-03-18
 */

const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

const typeDefs = require('@valueflows/vf-graphql').typeDefs

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({ schema })

const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
)
