/**
 * Ensures that different module configurations compile OK (no fields are missing in given combinations)
 *
 * @package: vf-graphql
 * @since:   2020-03-29
 */

const test = require('tape-catch')

const { makeMockSchema, exerciseSchema } = require('./helpers')
const { buildSchema, printSchema } = require('../lib')

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

test('configuration: observation, planning & proposal', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'proposal',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning & proposal + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'proposal',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning, recipe & proposal', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'proposal',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning, recipe & proposal + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'proposal',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning & agreement', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'agreement',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning & agreement + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning',
    'agreement',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning, recipe & agreement', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'agreement',
  ])))
  exerciseSchema(schema)
  t.end()
})

test('configuration: observation, planning, recipe & agreement + geo', (t) => {
  const schema = makeMockSchema(printSchema(buildSchema([
    'knowledge', 'measurement',
    'agent',
    'observation', 'planning', 'recipe',
    'agreement',
    'geolocation',
  ])))
  exerciseSchema(schema)
  t.end()
})

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

