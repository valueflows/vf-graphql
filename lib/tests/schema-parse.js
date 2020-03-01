/**
 * Ensures that the schema is valid
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const test = require('tape-catch')
const {
  graphqlSync,
  introspectionQuery,
} = require('graphql')
const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')

const { buildSchema, printSchema } = require('../')

function makeMockSchema(typeDefs) {
  const schema = makeExecutableSchema({ typeDefs })
  addMockFunctionsToSchema({ schema })
  return schema
}

function exerciseSchema(schema) {
  // Perform runtime validation of the schema via introspection query
  const introspection = graphqlSync(schema, introspectionQuery)
  if (!introspection) {
    throw new Error('Unknown error executing introspection query. Schema may be invalid.')
  } else if (introspection.error) {
    throw introspection.error
  } else if (introspection.errors) {
    const errsList = introspection.errors.map(e => e.message)
    throw new Error('Query runtime compilation failure:\n' + errsList.join('\n\t'))
  }
}

test('schema compiles', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema()))
  exerciseSchema(schema)
  t.end()
})

test('configuration: standalone agent', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'agent',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: agent mapping', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'agent', 'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation only', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation & planning', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation & planning + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning & recipe', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning & recipe + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: recipe only', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'recipe',
  ])))
  exerciseSchema(schema)
  t.end()
})

// :TODO: support "planning only"

test('configuration: observation, planning & governance', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'proposal', 'agreement',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning & governance + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'proposal', 'agreement',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning, recipe & governance', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'proposal', 'agreement',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning, recipe & governance + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'proposal', 'agreement',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

// misc modules - testing in most isolated configurations only

test('configuration: gift economies', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation',
    'appreciation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: future claims', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation',
    'claim',
  ])))
  exerciseSchema(schema)
  t.end()
})
