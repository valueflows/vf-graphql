/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const fs = require('fs')
const path = require('path')
const { buildSchema, findBreakingChanges } = require('graphql')

const { all_vf: typeDefs } = require('@valueflows/vf-graphql-schemas')
const schema = buildSchema(typeDefs)

module.exports = {
  schema,
  typeDefs,
  validate: (oSchema) => findBreakingChanges(schema, oSchema)
}
