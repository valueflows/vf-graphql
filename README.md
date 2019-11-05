# vf-graphql

Reference GraphQL implementation of the ValueFlows spec

<!-- MarkdownTOC -->

- [Setup](#setup)
	- [Prerequisites](#prerequisites)
	- [Initialising for development](#initialising-for-development)
	- [Available commands](#available-commands)
- [Contributing](#contributing)
	- [Directory structure](#directory-structure)
	- [Publishing to NPM](#publishing-to-npm)
- [Implementing](#implementing)
- [License](#license)

<!-- /MarkdownTOC -->


This is to help synchronize the projects using VF for a graphql interface between client and server.  It includes the VF specification, plus recommended vocabulary specification not part of the rdf-based VF spec but needed for all VF based implementations of economic software (for example Agent, Person, Organization, note, image).  It also includes recommended inverse relationship naming, which is particularly useful in graphql implementations.


## Setup

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
- `typeDefs.js` contains only the schemas themselves (as strings); packages wishing to *implement* APIs using the reference spec can reference this file instead of the main module entrypoint to skip some initialisation logic only needed for validation.
- `tests/` contains tests for ensuring the schemas compile successfully.
- `schemas/` contains the actual GraphQL schema definition files. **These are the files you should edit.**
- `build/` and `index.d.ts` are generated from the schema files, using helper code in `lib/scripts/`.

### Publishing to NPM

- You will need to be given access to the [VF NPM org](https://www.npmjs.com/org/valueflows) in order to update the module on the registry. You can request access in https://gitter.im/valueflows/welcome
- Bump the version in `lib/package.json` & commit to the repository
- Run `npm run publish` from this directory
- Tag the current release in git and push the tag to `origin`



## Implementing

To implement a system gateway compatible with the ValueFlows spec, you will need to define the following:

- An [implementation object](https://www.apollographql.com/docs/graphql-tools/generate-schema.html) for resolving all relationship fields, to be passed to `makeExecutableSchema` along with the `schema` definition exported by this module
- [Scalar type resolvers](https://www.apollographql.com/docs/graphql-tools/scalars.html) for the ISO8601 `DateTime` & `DateInterval` types

For a more detailed example, see the project in `./mock-server/`.




## License

Released under an Apache 2.0 license.
