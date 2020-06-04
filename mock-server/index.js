/**
 * GraphQL / iQL server
 *
 * @package: HoloREA
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2019-03-18
 */

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { express: voyagerMiddleware } = require('graphql-voyager/middleware')
const { addMocksToSchema } = require('@graphql-tools/mock')

const SERVER_PORT = process.env.PORT || 3000
const SCHEMA_VIEWER_PATH = '/viewer'

const { buildSchema } = require('@valueflows/vf-graphql')

const schema = addMocksToSchema({
  schema: buildSchema(),
  mocks: {
    URI: () => 'http://example.com/thing',
    DateTime: () => new Date().toISOString(),
    DateInterval: () => 'P1Y2M10DT2H30M',
    AnyType: () => '??????',
  },
})

const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

app.use(SCHEMA_VIEWER_PATH, voyagerMiddleware({
  endpointUrl: server.graphqlPath,
  displayOptions: {
    hideRoot: true,
    showLeafFields: true,
  },
}))

app.listen({ port: SERVER_PORT }, () =>
  console.log(`🚀🚀🚀
    Query browser at http://localhost:${SERVER_PORT}${server.graphqlPath}
    Schema visualiser at http://localhost:${SERVER_PORT}${SCHEMA_VIEWER_PATH}
🚀🚀🚀`)
)
