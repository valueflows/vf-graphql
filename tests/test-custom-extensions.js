/**
 * Ensure custom schema extensions operate as expected
 *
 * @package: vf-graphql
 * @since:   2020-03-29
 */

const test = require('tape-catch')

const { buildSchema, printSchema } = require('../')

test('custom extensions', (t) => {
  const knowledgeExtensions = `
    type ResourceSpecification {
      customResourceTypeAttribute: String
    }

    type NewCustomType {
      field: ID
    }
  `

  const schema = printSchema(buildSchema([
    'measurement', 'knowledge',
  ], [
    knowledgeExtensions,
  ]))

  t.ok(schema.match(/type ResourceSpecification \{(.|\n)*?customResourceTypeAttribute: String(.|\n)*?\}/gm), 'injected attribute not found')
  t.ok(schema.match(/type NewCustomType \{(\s|\n)+?field: ID(\s|\n)+?\}/gm), 'injected type not found')

  t.end()
})
