/**
 * Ensures that the schema is valid
 *
 * @package: HoloREA
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2019-02-11
 */

const test = require('tape-catch')

test('schema compiles', (t) => {
  require('../')
  t.end()
})
