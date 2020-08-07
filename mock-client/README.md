# ValueFlows GraphQL client mock

Apollo `GraphQLClient` configuration to serve randomly generated mock data through the [ValueFlows GraphQL API spec](https://lab.allmende.io/valueflows/vf-schemas/vf-graphql).

<!-- MarkdownTOC -->

- [Other ValueFlows GraphQL clients](#other-valueflows-graphql-clients)
- [License](#license)

<!-- /MarkdownTOC -->

Exports an asynchronous function which (eventually) returns a GraphQL client ready to be plugged in to a testing framework or development application.

Directly pluggable with other ValueFlows-compatible GraphQL client modules- simply change the module name!


## Other ValueFlows GraphQL clients

- [Holochain API client](https://github.com/holo-rea/app-offers-needs-marketplace/tree/sprout/src/graphql-client) based on the [Holo-REA](https://github.com/holo-rea/holo-rea/tree/sprout/modules/vf-graphql-holochain) implementation


## License

Released under an Apache 2.0 license.
