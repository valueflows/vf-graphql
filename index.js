/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2019-02-11
 */

const fs = require('fs')
const { buildSchema, findBreakingChanges } = require('graphql')

const schema = buildSchema([
  fs.readFileSync('schemas/config.gql'),
  fs.readFileSync('schemas/agent.gql'),
  fs.readFileSync('schemas/observation.gql'),
  fs.readFileSync('schemas/planning.gql'),
  fs.readFileSync('schemas/knowledge.gql'),
  fs.readFileSync('schemas/query.gql'),
  fs.readFileSync('schemas/mutation.gql'),
].join(''))

module.exports = {
  schema,
  validate: (oSchema) => findBreakingChanges(schema, oSchema)
}
