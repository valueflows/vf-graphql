/**
 * Manifest file for (generated) pure-js schema content
 *
 * @package: HoloREA
 * @since:   2019-05-22
 * @flow
 */

const agent = require('./build/agent')
const structs = require('./build/structs')
const observation = require('./build/observation')
const planning = require('./build/planning')
const knowledge = require('./build/knowledge')
const query = require('./build/query')
const mutation = require('./build/mutation')

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
