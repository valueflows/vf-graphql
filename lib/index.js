/**
 * Entrypoint for inflated GraphQL schema and validation helpers
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const { buildASTSchema, findBreakingChanges, printSchema } = require('graphql')
const { mergeTypeDefs } = require('@graphql-toolkit/schema-merging')

const { schemaModules, bridgingSchemas } = require('./schema-manifest')

function buildSchema(moduleIds, extensionSchemas, options) {
  // default to all modules
  if (!moduleIds || !moduleIds.length) {
    moduleIds = Object.keys(schemaModules)
  }

  if (!options) {
    options = { throwOnConflict: true }
  }

  // util types are always required
  moduleIds.push('util')

  // ensure each schema is only loaded once
  moduleIds = moduleIds.filter((value, index, self) => {
    return self.indexOf(value) === index
  }).sort()

  // automatically load in any 'bridging' schemas implied by the provided module IDs
  const bridgingModules = Object.keys(bridgingSchemas)
    .filter((bridge) => {
      const bridgeDependencies = bridge.split('.')
      for (let i = 0, l = bridgeDependencies.length; i < l; ++i) {
        if (moduleIds.indexOf(bridgeDependencies[i]) === -1) {
          return false
        }
      }
      return true
    })

  // bring in the schema fragment strings
  const fragments = moduleIds.concat(bridgingModules).map(td => {
    const schemaData = schemaModules[td] || bridgingSchemas[td]
    if (!schemaData) {
      throw new Error(`Unknown Holo-REA schema module ID: ${td}`)
    }
    return schemaData
  })

  // merge fragments and build GraphQLSchema object
  return buildASTSchema(mergeTypeDefs(fragments.concat(extensionSchemas || [])), options)
}

module.exports = {
  buildSchema,
  printSchema,
  validate: (oSchema, moduleIds, extensionSchemas) => findBreakingChanges(buildSchema(moduleIds, extensionSchemas), oSchema),
}
