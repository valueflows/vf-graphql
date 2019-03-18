/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const fs = require('fs')
const { buildSchema, findBreakingChanges } = require('graphql')

const schema = buildSchema(
  [
    'structs',
    'agent',
    'observation',
    'planning',
    'knowledge',
    'query',
    'mutation',
  ]
  .map(f => fs.readFileSync(`../schemas/${f}.gql`))
  .join('')
)

module.exports = {
  schema,
  validate: (oSchema) => findBreakingChanges(schema, oSchema)
}
