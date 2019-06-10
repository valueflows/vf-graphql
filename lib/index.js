/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const fs = require('fs')
const path = require('path')
const { buildSchema, findBreakingChanges } = require('graphql')

const typeDefs = require('./typeDefs')
const schema = buildSchema(typeDefs.all_vf)

module.exports = {
  schema,
  typeDefs,
  validate: (oSchema) => findBreakingChanges(schema, oSchema)
}
