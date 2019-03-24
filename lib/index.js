/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const fs = require('fs')
const path = require('path')
const { buildSchema, findBreakingChanges } = require('graphql')

const typeDefs = [
  'structs',
  'agent',
  'observation',
  'planning',
  'knowledge',
  'query',
  'mutation',
]
.map(f => fs.readFileSync(path.resolve(__dirname, `../schemas/${f}.gql`)))
.join('')

const schema = buildSchema(typeDefs)

module.exports = {
  typeDefs,
  schema,
  validate: (oSchema) => findBreakingChanges(schema, oSchema)
}
