/**
 * Manifest file for (generated) pure-js schema content
 *
 * @package: HoloREA
 * @since:   2019-05-22
 * @flow
 */

const agent = require('./agent')
const structs = require('./structs')
const observation = require('./observation')
const planning = require('./planning')
const knowledge = require('./knowledge')
const query = require('./query')
const mutation = require('./mutation')

module.exports = {
  all_vf: agent
        + structs
        + observation
        + planning
        + knowledge
        + query
        + mutation,

  agent,
  structs,
  observation,
  planning,
  knowledge,
  query,
  mutation,
}
