# vf-graphql

Reference GraphQL implementation of the ValueFlows spec

<!-- MarkdownTOC -->

- [Contributing](#contributing)
- [Implementing](#implementing)

<!-- /MarkdownTOC -->


This is to help synchronize the projects using VF for a graphql interface between client and server.  It includes the VF specification, plus recommended vocabulary specification not part of the rdf-based VF spec but needed for all VF based implementations of economic software (for example Agent, Person, Organization, note, image).  It also includes recommended inverse relationship naming, which is particularly useful in graphql implementations.



## Contributing

The recommended way to contribute to this repo is via the `npm run dev` command. This will watch the code for changes and run tests every time you save a file. It's best to do it this way as the errors from the GraphQL parser can be hard to track down- more frequent feedback means you will catch any errors sooner.



## Implementing

To implement a system gateway compatible with the ValueFlows spec, you will need to define the following:

- An [implementation object](https://www.apollographql.com/docs/graphql-tools/generate-schema.html) for resolving all relationship fields, to be passed to `makeExecutableSchema` along with the `schema` definition exported by this module
- [Scalar type resolvers](https://www.apollographql.com/docs/graphql-tools/scalars.html) for the ISO8601 `DateTime` & `DateInterval` types
