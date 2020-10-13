/**
 * Test helpers
 *
 * @package: vf-graphql
 * @since:   2020-03-29
 */

const {
  graphqlSync,
  introspectionQuery,
} = require('graphql')
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

function makeMockSchema(typeDefs) {
  const schema = makeExecutableSchema({ typeDefs })
  addMockFunctionsToSchema({ schema })
  return schema
}

function exerciseSchema(schema) {
  // Perform runtime validation of the schema via introspection query
  const introspection = graphqlSync(schema, introspectionQuery)
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
