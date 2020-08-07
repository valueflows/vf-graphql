/**
 * ValueFlows GraphQLClient mock
 *
 * Serves random mock datasources through the VF API
 *
 * @package: ValueFlows GraphQL client mock
 * @since:   2020-08-07
 */

import { ApolloClient } from 'apollo-client'
import { SchemaLink } from 'apollo-link-schema'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { addMocksToSchema } from '@graphql-tools/mock'
import { buildSchema } from '@valueflows/vf-graphql'

const schema = addMocksToSchema({
  schema: buildSchema(),
  mocks: {
    URI: () => 'http://example.com/thing',
    DateTime: () => new Date().toISOString(),
  },
})

function initClient() {
  return new Promise((resolve, reject) => resolve(
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new SchemaLink({ schema })
    })
  ))
}

export default initClient
