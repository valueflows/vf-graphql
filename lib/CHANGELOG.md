## 0.5.0

- **Breaking:** renames the `transfer-complete` action to `transfer`, as the former was confusing for some users
- Adds missed mutations for `Proposal` and related records

## 0.4.3

- Adds `defaultUnitOfEffort` to `ResourceSpecification` as a stop-gap for unit inference in VF0.4 release (see [#64](https://github.com/valueflows/vf-graphql/issues/64))

## 0.4.2

- Finalise fields for `EconmicResource` & `EconomicEvent` creation & update logic

## 0.4.1

- Adds missed mutations for `Unit` & `ProcessSpecification`

## 0.4.0

**Updated for ValueFlows 0.4 release.**

- Changed from [QUDT](http://www.qudt.org/pages/QUDToverviewPage.html) to [OM](https://github.com/HajoRijgersberg/OM) ontology for measurements
- New action metadata
- Add `EconomicResource` stage & state attributes
- Remove `before` & `after` time fields on `EconomicEvent` & `Process`

## 0.3.0

Initial release. Rough around the edges, missing many mutations & queries, but the core schema is stable.
