/* istanbul ignore file */

// default scenario is used during `yarn start --mirage`
export default function defaultScenario(server) {
  server.create('metadata-source');
  server.create('metadata-collection');
}
