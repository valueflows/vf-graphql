This file documents the overarching patterns used in the GraphQL API design.

Where there are exceptions to these basic rules, they should be explicitly documented
in the field description.

## General

Conventions for all operations are as follows:

- input record data is provided in named sub-fields of the request & response
  - the sub-field ID is the lower camelCase name of the record type
- response data is provided in named sub-fields of the same format

## READ:

- `getXXXX(id: ID!)` queries load individual records by ID
- `allXXXX(offset: ID, limit: Int)` queries load lists of all existing records of different types
- `filteredXXXX(filter: ???, offset: ID, limit: Int)` queries take some input struct which defines query fields to search on. Search conditions must be combined using boolean 'AND' logic; i.e. more fields narrows results rather than expanding them.

## CREATE:

- fields which are required by the record are required in input parameters
- optional fields will be left `null` in the record if ommitted

## UPDATE:

- `id` field is required & passing no ID is treated as an error
- all other fields are optional, if left unchanged they will remain at their
  current values
- pass `null` as a field value to erase it
- when updating array fields, the complete array must be sent; enabling deletion of array elements
- no fields being updated is treated as a no-op; clients should optimise
  to avoid unnecessary writes

## DELETE:

- `id` is only parmeter
- the deleted record will be returned in the response for its fields to be retained

## TODO

- enable validation of shared core record field presence in C&U operations (@see https://github.com/facebook/graphql/issues/488)
