/**
 * Ensures that the schema is valid
 *
 * @package: vf-graphql
 * @since:   2019-02-11
 */

const test = require('tape-catch')

const { makeMockSchema, exerciseSchema } = require('./helpers')
const { buildSchema, printSchema } = require('../')

test('schema compiles', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema()))
  exerciseSchema(schema)
  t.end()
})
