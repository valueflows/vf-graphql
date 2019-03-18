/**
 * Ensures that the schema is valid
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const test = require('tape-catch')

const { makeExecutableSchema } = require('graphql-tools')

test('schema compiles', (t) => {
  makeExecutableSchema({ typeDefs: require('../').typeDefs })
  t.end()
})
