/**
 * Ensures that the schema is valid
 *
 * @package: HoloREA
 * @since:   2019-02-11
 */

const test = require('tape-catch')

test('schema compiles', (t) => {
  require('../')
  t.end()
})
