/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const { buildASTSchema, findBreakingChanges } = require('graphql')
const { mergeTypeDefs } = require('@graphql-toolkit/schema-merging')

const SCHEMA_FRAGMENTS = require('./typeDefs')

function buildSchema(typeDefs) {
  return buildASTSchema(
    mergeTypeDefs(typeDefs.map(td => {
      if (!SCHEMA_FRAGMENTS[td]) {
        throw new Error(`Unknown Holo-REA schema module ID: ${td}`)
      }
      return SCHEMA_FRAGMENTS[td]
    }), { throwOnConflict: true })
  )
}

const schema = buildSchema([
  'structs', 'query', 'mutation',
  'agent', 'observation', 'planning', 'knowledge',
])

module.exports = {
  schema,
  buildSchema,
  typeDefs: SCHEMA_FRAGMENTS,
  validate: (oSchema) => findBreakingChanges(schema, oSchema),
}
