/**
 * Test helpers
 *
 * @package: vf-graphql
 * @since:   2020-03-29
 */

const {
  graphqlSync,
  getIntrospectionQuery,
} = require('graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { addMocksToSchema } = require('@graphql-tools/mock')

function makeMockSchema(typeDefs) {
  const schema = makeExecutableSchema({ typeDefs })
  addMocksToSchema({ schema })
  return schema
}

function exerciseSchema(schema) {
  // Perform runtime validation of the schema via introspection query
  const introspection = graphqlSync({ schema, source: getIntrospectionQuery() })
  if (!introspection) {
    throw new Error('Unknown error executing introspection query. Schema may be invalid.')
  } else if (introspection.error) {
    throw introspection.error
  } else if (introspection.errors) {
    const errsList = introspection.errors.map(e => e.message)
    throw new Error('Query runtime compilation failure:\n' + errsList.join('\n\t'))
  }
}

module.exports = {
  makeMockSchema,
  exerciseSchema,
}
