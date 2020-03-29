# vf-graphql

GraphQL reference implementation of the [ValueFlows](http://valueflo.ws/) grammar.

<!-- MarkdownTOC -->

- [API](#api)
	- [Generating schemas](#generating-schemas)
	- [Accessing schemas](#accessing-schemas)
	- [Validating implementations](#validating-implementations)
- [Implementing](#implementing)
- [Development setup](#development-setup)
	- [Prerequisites](#prerequisites)
	- [Initialising for development](#initialising-for-development)
	- [Available commands](#available-commands)
- [Contributing](#contributing)
	- [Directory structure](#directory-structure)
	- [Code structure](#code-structure)
	- [Publishing to NPM](#publishing-to-npm)
- [License](#license)

<!-- /MarkdownTOC -->


This project synchronizes projects implementing VF for a GraphQL interface between client and server. It includes:

- A GraphQL-native specification of the core VF grammar
- Complementary schemas not part of the RDF-based VF spec but needed for all VF implementations of economic software (for example `Agent`, `Person`, `Organization`, `SpatialThing`, `note`, `image`). 
- Formal definition of mutation, query & subscriptions APIs
- Formal definition of available query parameters
- Inverse relationship naming
- Composable GraphQL schemas, TypeScript and FlowType definitions
- Runtime composition of schema modules into application-specific APIs which implement subsets of the ValueFlows vocabulary




## API

The top-level module export contains three methods: `buildSchema`, `printSchema` and `validate`.

### Generating schemas

The **`buildSchema`** method allows you to dynamically create schemas for the entire ValueFlows specification, or modular subsets of it. The full schema is broken down into modules of functionality, so that implementations which only aim to cover part of the specification can do so.

- When run without arguments, `buildSchema` will return a GraphQLSchema object for the entire ValueFlows API, including all optional and auxiliary modules.
- When passed an array, it builds a subset of the full spec which includes only the specified modules. For a complete list of modules, see `schemaModules` in `schema-manifest.js` or refer to the filenames in `lib/schemas`.
- An optional third argument allows for custom extensions to the core specification to be injected, where implementations include additional domain-specific logic that is not part of ValueFlows. Simply pass an array of GraphQL [SDL schema strings](https://graphql.org/learn/schema/) and these will be merged into the resultant schema.

### Accessing schemas

[**`printSchema`**](https://graphql.org/graphql-js/utilities/#printschema) from the `graphql` module is also exported to make it easy to turn the built schema objects created by `buildSchema` into SDL strings, as some tooling requires this input format.

Therefore, if you need access to a string version of any schema you can get an SDL version with:

	printSchema(buildSchema(/* [...] */))

If all you need is the *entire* schema as a string, consider importing `@valueflows/vf-graphql/ALL_VF_SDL` or `@valueflows/vf-graphql/json-schema.json` instead.

### Validating implementations

**`validate`** has the same parameters as `buildSchema`, but takes another GraphQL schema as its first argument and validates it against a schema generated from the given set of module IDs and extension schemas. The output format is that of GraphQL's [`findBreakingChanges`](https://github.com/graphql/graphql-js/blob/master/src/utilities/findBreakingChanges.js) method.




## Implementing

To implement a system gateway compatible with the ValueFlows spec, you will need to define the following:

- An [implementation object](https://www.apollographql.com/docs/graphql-tools/generate-schema.html) for resolving all relationship fields, to be passed to `makeExecutableSchema` along with the `schema` definition exported by this module
- [Scalar type resolvers](https://www.apollographql.com/docs/graphql-tools/scalars.html) for the ISO8601 `DateTime` & `DateInterval` types

For a more detailed example, see the project in `./mock-server/`.




## Development setup

### Prerequisites

- If you don't have Yarn- `npm i -g yarn` using the version of node you plan on developing this project against *(for recommended, see `.nvmrc`)*. You can setup your modules manually using `npm link` if you prefer, but Yarn's workspaces feature will save you a lot of time.

### Initialising for development

- Run `yarn` from the top level folder of this repository to install and wire up all dependencies.

### Available commands

See `scripts` in `package.json` for the available commands. For quickly spinning up the full system, you should usually be able to simply run `npm start`. This will load up:

- Test runner for the schemas. **It is recommended when authoring schemas to save often and watch the test output, as no line number information is available when debugging.**
- A GraphiQL query UI at `http://localhost:3000/graphql` which you can use to test queries against a mock GraphQL API derived from the schema.
- A [GraphQL Voyager](https://apis.guru/graphql-voyager/) UI at `http://localhost:3000/viewer` which shows an interactive visual representation useful for exploring the schema.


## Contributing

The recommended way to contribute to this repo is via the `npm run dev:schema` command (also run as part of `npm start`). This will watch the code for changes and build & run tests every time you save a file. It's best to do it this way as the errors from the GraphQL parser can be hard to track down- more frequent feedback means you will catch any errors sooner.

### Directory structure

The `lib/` directory contains all source of the reference schema & validation helpers:

- `index.js` is the main entrypoint to the module, used by other packages wishing to validate schemas against the spec.
- `tests/` contains tests for ensuring the schemas compile successfully.
- `schemas/` contains the actual GraphQL schema definition files. **These are the files you should edit.**
	- `schemas/bridging/` contains files which are automatically loaded in `buildSchema`. The filenames are dot-separated, and if all of the filename components are present in the module IDs passed then the schema is injected. For a list of available module IDs, see `schema-manifest.js`.
- `build/`, `json-schema.json` and the other `*.js` files are excluded from version control. They are generated from the schema definition files, using helper code in `lib/scripts/`.


### Code structure

The "bridging" schema files in `schemas/bridging/` create non-obvious behaviour within the top-level schema modules in `schemas/`. On first glance, some fields (eg. `EconomicEvent.realizationOf`) may appear to be missing from the record type definitions. However, this field's presence in the `observation.agreement` "bridging" schema means that it will automatically be added to the output schema if both `observation` and `agreement` are included. So&mdash; always check these files for a property before consider it missing as it may be part of a cross-module relationship or index.

The `buildSchema` helper defined in the module root manages all the logic for managing "bridging" schemas internally.


### Publishing to NPM

- You will need to be given access to the [VF NPM org](https://www.npmjs.com/org/valueflows) in order to update the module on the registry. You can request access in https://gitter.im/valueflows/welcome
- Bump the version in `lib/package.json` & commit to the repository
- Update `CHANGELOG.md` with the new version ID and list of changes, and commit
- Run `npm run publish` from this directory
- Tag the current release in git and push the tag to `origin`




## License

Released under an Apache 2.0 license.
