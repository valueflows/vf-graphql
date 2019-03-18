/**
 * GraphQL / iQL server
 *
 * @package: HoloREA
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2019-03-18
 */

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typedefs = require('@valueflows/vf-graphql').schema;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);
