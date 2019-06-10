/**
 * Ensures that the schema is valid
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const test = require('tape-catch')

const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

test('schema compiles', (t) => {
  const schema = makeExecutableSchema({ typeDefs: require('../typeDefs').all_vf })
  addMockFunctionsToSchema({ schema })
  t.end()
})
