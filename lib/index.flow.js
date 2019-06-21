/* @flow */

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `URI` type simply declares a reference to an external web URL, Holochain entry or other resource. */
  URI: string,
  /** A type which allows any arbitrary value to be set */
  AnyType: any,
  /** The `DateTime` scalar type represents a DateTime value as specified by
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: Date
};

/** An action verb defining the kind of event, commitment, or intent.
 * It is recommended that the lowercase action verb should be used as the record ID
 * in order that references to `Action`s elsewhere in the system are easily readable.
 */
export type Action = {
  __typename?: "Action",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  resourceEffect: $ElementType<Scalars, "String">
};

/** A person or group or organization with economic agency. */
export type Agent = {
  id: $ElementType<Scalars, "ID">,
  /** The name that this agent will be referred to by. */
  name: $ElementType<Scalars, "String">,
  /** A 'profile image' for this agent. */
  image?: ?$ElementType<Scalars, "URI">,
  /** Optional email address contact for this agent. */
  email?: ?$ElementType<Scalars, "String">,
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: ?SpatialThing,
  note?: ?$ElementType<Scalars, "String">,
  inventoriedEconomicResources?: ?Array<EconomicResource>,
  economicEvents?: ?Array<EconomicEvent>,
  processes?: ?Array<Process>,
  commitments?: ?Array<Commitment>,
  intents?: ?Array<Intent>,
  plans?: ?Array<Plan>,
  relationships?: ?Array<AgentRelationship>,
  relationshipsAsSubject?: ?Array<AgentRelationship>,
  relationshipsAsObject?: ?Array<AgentRelationship>,
  roles?: ?Array<AgentRelationshipRole>,
  recipes?: ?Array<ResourceSpecification>
};

/** A person or group or organization with economic agency. */
export type AgentInventoriedEconomicResourcesArgs = {
  filter?: ?AgentResourceSearchParams
};

/** A person or group or organization with economic agency. */
export type AgentEconomicEventsArgs = {
  filter?: ?AgentEventSearchParams
};

/** A person or group or organization with economic agency. */
export type AgentProcessesArgs = {
  filter?: ?AgentProcessSearchParams
};

/** A person or group or organization with economic agency. */
export type AgentCommitmentsArgs = {
  filter?: ?AgentCommitmentSearchParams
};

/** A person or group or organization with economic agency. */
export type AgentIntentsArgs = {
  filter?: ?AgentIntentSearchParams
};

/** A person or group or organization with economic agency. */
export type AgentPlansArgs = {
  filter?: ?AgentPlanSearchParams
};

/** A person or group or organization with economic agency. */
export type AgentRelationshipsArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsSubjectArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsObjectArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** Query parameters for reading `Commitment`s related to an `Agent` */
export type AgentCommitmentSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  action?: ?$ElementType<Scalars, "ID">,
  startDate?: ?$ElementType<Scalars, "DateTime">,
  endDate?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">
};

export type AgentCreateParams = {
  primaryPhone?: ?$ElementType<Scalars, "String">,
  name: $ElementType<Scalars, "String">,
  image?: ?$ElementType<Scalars, "URI">,
  email?: ?$ElementType<Scalars, "String">,
  primaryLocation?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

/** Query parameters for reading `EconomicEvent`s related to an `Agent` */
export type AgentEventSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  action?: ?$ElementType<Scalars, "ID">,
  startDate?: ?$ElementType<Scalars, "DateTime">,
  endDate?: ?$ElementType<Scalars, "DateTime">
};

export type AgentIntentSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  action?: ?$ElementType<Scalars, "ID">,
  startDate?: ?$ElementType<Scalars, "DateTime">,
  endDate?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">
};

/** Query parameters for reading `Plan`s related to an `Agent` */
export type AgentPlanSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  finished?: ?$ElementType<Scalars, "Boolean">
};

/** Query parameters for reading `Process`es related to an `Agent` */
export type AgentProcessSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  finished?: ?$ElementType<Scalars, "Boolean">
};

/** An ongoing voluntary association between 2 agents of any kind. */
export type AgentRelationship = {
  __typename?: "AgentRelationship",
  id: $ElementType<Scalars, "ID">,
  subject: Agent,
  object: Agent,
  relationship: AgentRelationshipRole,
  note?: ?$ElementType<Scalars, "String">
};

export type AgentRelationshipCreateParams = {
  subject: $ElementType<Scalars, "ID">,
  object: $ElementType<Scalars, "ID">,
  relationship: $ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

export type AgentRelationshipResponse = {
  __typename?: "AgentRelationshipResponse",
  agentRelationship: AgentRelationship
};

/** A relationship role defining the kind of association one agent can have with another. */
export type AgentRelationshipRole = {
  __typename?: "AgentRelationshipRole",
  id: $ElementType<Scalars, "ID">,
  label: $ElementType<Scalars, "String">,
  inverseLabel?: ?$ElementType<Scalars, "String">
};

export type AgentRelationshipRoleCreateParams = {
  label: $ElementType<Scalars, "String">,
  inverseLabel?: ?$ElementType<Scalars, "String">
};

export type AgentRelationshipRoleResponse = {
  __typename?: "AgentRelationshipRoleResponse",
  agentRelationshipRole?: ?AgentRelationshipRole
};

export type AgentRelationshipRoleUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  label?: ?$ElementType<Scalars, "String">,
  inverseLabel?: ?$ElementType<Scalars, "String">
};

export type AgentRelationshipUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  subject?: ?$ElementType<Scalars, "ID">,
  object?: ?$ElementType<Scalars, "ID">,
  relationship?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

/** Query parameters for reading `EconomicResource`s related to an `Agent` */
export type AgentResourceSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  resourceClassification?: ?$ElementType<Scalars, "URI">,
  page?: ?$ElementType<Scalars, "Int">
};

export type AgentUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  primaryPhone?: ?$ElementType<Scalars, "String">,
  name?: ?$ElementType<Scalars, "String">,
  image?: ?$ElementType<Scalars, "URI">,
  email?: ?$ElementType<Scalars, "String">,
  primaryLocation?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

/** Any type of agreement among economic agents. */
export type Agreement = {
  __typename?: "Agreement",
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  created?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">,
  commitments?: ?Array<Commitment>,
  economicEvents?: ?Array<EconomicEvent>,
  involvedAgents?: ?Array<Agent>
};

export type AgreementCreateParams = {
  name: $ElementType<Scalars, "String">,
  created: $ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

export type AgreementResponse = {
  __typename?: "AgreementResponse",
  Agreement?: ?Agreement
};

export type AgreementUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  created?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

/** References either an agreement formally managed by `Commitment`s & `EconomicEvent`s,
 * or an external agreement which is loosely held to govern resource flows.
 */
export type AnyAgreement = Agreement | ReferencedAgreement;

/** A way to tie an economic event that is given in loose fulfilment for another
 * economic event, without commitments or expectations. Supports the gift economy.
 */
export type Appreciation = {
  __typename?: "Appreciation",
  id: $ElementType<Scalars, "ID">,
  /** The `EconomicEvent` this appreciation has been given in acknowledgement of */
  appreciationOf?: ?EconomicEvent,
  /** The `EconomicEvent` provided as a gift in this appreciation */
  appreciationWith?: ?EconomicEvent,
  note?: ?$ElementType<Scalars, "String">
};

export type AppreciationCreateParams = {
  appreciationOf?: ?$ElementType<Scalars, "ID">,
  appreciationWith?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

export type AppreciationResponse = {
  __typename?: "AppreciationResponse",
  appreciation?: ?Appreciation
};

export type AppreciationUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  appreciationOf?: ?$ElementType<Scalars, "ID">,
  appreciationWith?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

/** A claim for a future economic event(s) in reciprocity for an economic event that already occurred. */
export type Claim = {
  __typename?: "Claim",
  id: $ElementType<Scalars, "ID">,
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider: Agent,
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver: Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: ?ResourceSpecification,
  /** The amount of the claimed resource desired by the claim. */
  claimedQuantity?: ?QuantityValue,
  /** The economic event which already occurred which this claim has been made against. */
  triggeredBy: EconomicEvent,
  /** Indicates that the claim must be filled before the given date. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** The data on which the claim was made. */
  created?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  note?: ?$ElementType<Scalars, "String">,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: ?AnyAgreement
};

export type ClaimCreateParams = {
  action?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  claimedQuantity?: ?IQuantityValue,
  triggeredBy?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">,
  underAgreement?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">
};

export type ClaimResponse = {
  __typename?: "ClaimResponse",
  claim?: ?Claim
};

export type ClaimUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  action?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  claimedQuantity?: ?IQuantityValue,
  triggeredBy?: ?$ElementType<Scalars, "ID">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  note?: ?$ElementType<Scalars, "String">,
  underAgreement?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">
};

/** A planned economic flow that has been promised by an agent to another agent. */
export type Commitment = {
  __typename?: "Commitment",
  id: $ElementType<Scalars, "ID">,
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** A `Process` or `Transfer` which this `Commitment` will aid in the finalisation of. */
  inputOf?: ?EconomicActivity,
  /** A `Process` or `Transfer` which this `Commitment` has been generated as a result of. */
  outputOf?: ?EconomicActivity,
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider?: ?Agent,
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver?: ?Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: ?ResourceSpecification,
  /** Economic resource involved in the flow. */
  resourceInventoriedAs?: ?EconomicResource,
  flowQuantity?: ?QuantityValue,
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact end of flow or process */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred prior to this specific time */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred after this specific time */
  after?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** The place where a commitment occurs.  Usually mappable. */
  atLocation?: ?SpatialThing,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: ?AnyAgreement,
  /** This commitment is part of the agreement, which could not exist without it. */
  clauseOf?: ?Agreement,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: ?Array<Fulfillment>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: ?Array<Satisfaction>,
  involvedAgents?: ?Array<Agent>,
  plan?: ?Plan
};

export type CommitmentCreateParams = {
  action: $ElementType<Scalars, "ID">,
  inputOf?: ?$ElementType<Scalars, "ID">,
  outputOf?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  resourceInventoriedAs?: ?$ElementType<Scalars, "ID">,
  flowQuantity: IQuantityValue,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  independentDemandOf?: ?$ElementType<Scalars, "ID">,
  atLocation?: ?$ElementType<Scalars, "ID">,
  underAgreement?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">,
  clauseOf?: ?$ElementType<Scalars, "ID">
};

export type CommitmentResponse = {
  __typename?: "CommitmentResponse",
  commitment?: ?Commitment
};

export type CommitmentUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  inputOf?: ?$ElementType<Scalars, "ID">,
  outputOf?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  resourceInventoriedAs?: ?$ElementType<Scalars, "ID">,
  flowQuantity: IQuantityValue,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  independentDemandOf?: ?$ElementType<Scalars, "ID">,
  atLocation?: ?$ElementType<Scalars, "ID">,
  underAgreement?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">,
  clauseOf?: ?$ElementType<Scalars, "ID">
};

/** A `Duration` represents an interval between two `DateTime` values. */
export type Duration = {
  __typename?: "Duration",
  numericDuration: $ElementType<Scalars, "Float">,
  unitType: TimeUnit
};

export type EconomicActivity = Process | Transfer;

/** An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 */
export type EconomicEvent = {
  __typename?: "EconomicEvent",
  id: $ElementType<Scalars, "ID">,
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Defines the activity to which this event is an input */
  inputOf?: ?EconomicActivity,
  /** Defines the activity for which this event is an output */
  outputOf?: ?EconomicActivity,
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider?: ?Agent,
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver?: ?Agent,
  /** Economic resource involved in the flow. */
  resourceInventoriedAs?: ?EconomicResource,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: ?ResourceSpecification,
  /** The amount and unit of the event. This is the quantity that could be used to
   * increment or decrement a resource, depending on the type of resource and type of event.
   */
  flowQuantity?: ?QuantityValue,
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact end of flow or process */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred prior to this specific time */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred after this specific time */
  after?: ?$ElementType<Scalars, "DateTime">,
  /** The place where an economic event occurs.  Usually mappable. */
  atLocation?: ?SpatialThing,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: ?AnyAgreement,
  /** This economic event occurs as part of this agreement. */
  realizationOf?: ?Agreement,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: ?Array<Fulfillment>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: ?Array<Satisfaction>,
  track?: ?Array<ProductionFlowItem>,
  trace?: ?Array<ProductionFlowItem>
};

export type EconomicEventCreateParams = {
  action: $ElementType<Scalars, "ID">,
  inputOf?: ?$ElementType<Scalars, "ID">,
  outputOf?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  resourceInventoriedAs?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  flowQuantity?: ?IQuantityValue,
  atLocation?: ?$ElementType<Scalars, "ID">,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

export type EconomicEventResponse = {
  __typename?: "EconomicEventResponse",
  economicEvent: EconomicEvent,
  economicResource?: ?EconomicResource
};

export type EconomicEventUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  action?: ?$ElementType<Scalars, "ID">,
  inputOf?: ?$ElementType<Scalars, "ID">,
  outputOf?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  resourceInventoriedAs?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  flowQuantity?: ?IQuantityValue,
  atLocation?: ?$ElementType<Scalars, "ID">,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

/** A resource which is useful to people or the ecosystem. */
export type EconomicResource = {
  __typename?: "EconomicResource",
  id: $ElementType<Scalars, "ID">,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: ?ResourceSpecification,
  /** Sometimes called lot number, used for trackable batched resources. Sometimes
   * called serial number, used when each item must have a trackable identifier
   * (like a computer). Could also be used for other unique tracking identifiers
   * needed for resources.
   */
  trackingIdentifier?: ?$ElementType<Scalars, "String">,
  /** URI to a descriptive picture of this item. */
  image?: ?$ElementType<Scalars, "URI">,
  /** The current amount and unit of the economic resource. This can be stored or
   * derived from economic events affecting the resource.
   */
  currentQuantity?: ?QuantityValue,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** A more concrete resource upon which a resource is based. */
  underlyingResource?: ?EconomicResource,
  /** Used when a stock economic resource contains units also defined as economic resources. */
  contains?: ?Array<EconomicResource>,
  /** The current place an economic resource is located. Could be at any level of
   * granularity, from a town to an address to a warehouse location. Usually mappable.
   */
  currentLocation?: ?SpatialThing,
  trace?: ?Array<EconomicEvent>,
  track?: ?Array<EconomicEvent>
};

/** Input `EconomicResource` type used when sending events to setup initial resource recordings */
export type EconomicResourceCreateParams = {
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  trackingIdentifier?: ?$ElementType<Scalars, "String">,
  image?: ?$ElementType<Scalars, "URI">,
  currentQuantity?: ?IQuantityValue,
  currentLocation?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

export type EconomicResourceResponse = {
  __typename?: "EconomicResourceResponse",
  economicResource: EconomicResource
};

export type EconomicResourceUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  trackingIdentifier?: ?$ElementType<Scalars, "String">,
  image?: ?$ElementType<Scalars, "URI">,
  currentQuantity?: ?IQuantityValue,
  currentLocation?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>
};

export type EventOrCommitment = EconomicEvent | Commitment;

/** The quantity that the economic event fulfilled towards the commitment. */
export type Fulfillment = {
  __typename?: "Fulfillment",
  id: $ElementType<Scalars, "ID">,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: EconomicEvent,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Commitment,
  /** The quantity of the fulfillment of an event towards a commitment or an intent. */
  fulfilledQuantity?: ?QuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

export type FulfillmentCreateParams = {
  fulfilledBy: $ElementType<Scalars, "ID">,
  fulfills: $ElementType<Scalars, "ID">,
  fulfilledQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

export type FulfillmentResponse = {
  __typename?: "FulfillmentResponse",
  fulfillment?: ?Fulfillment
};

export type FulfillmentUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  fulfilledBy?: ?$ElementType<Scalars, "ID">,
  fulfills?: ?$ElementType<Scalars, "ID">,
  fulfilledQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

/** Mutation input structure for defining time durations. */
export type IDuration = {
  numericDuration: $ElementType<Scalars, "Float">,
  unitType: TimeUnit
};

/** A planned economic flow, which can lead to economic events (sometimes through commitments). */
export type Intent = {
  __typename?: "Intent",
  id: $ElementType<Scalars, "ID">,
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** A `Process` or `Transfer` to which this `Intent` is hoping to contribute towards. */
  inputOf?: ?EconomicActivity,
  /** A `Process` or `Transfer` which this `Intent` will eventuate as a result of. */
  outputOf?: ?EconomicActivity,
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider?: ?Agent,
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver?: ?Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: ?ResourceSpecification,
  /** When a specific `EconomicResource` is known which can service the `Intent`, this defines that resource. */
  resourceInventoriedAs?: ?EconomicResource,
  flowQuantity?: ?QuantityValue,
  /** The base quantity of the offer or request, which can be multipied for an
   * actual commitment.  Used for example for a price list.
   */
  unitQuantity?: ?QuantityValue,
  /** The total quantity of the offered or requested resource available. */
  availableQuantity?: ?QuantityValue,
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact end of flow or process */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred prior to this specific time */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred after this specific time */
  after?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** The place where an intent would occur.  Usually mappable. */
  atLocation?: ?SpatialThing,
  image?: ?$ElementType<Scalars, "URI">,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: ?AnyAgreement,
  satisfiedBy?: ?Array<Satisfaction>,
  publishedIn?: ?Array<ProposedIntent>
};

export type IntentCreateParams = {
  action: $ElementType<Scalars, "ID">,
  inputOf?: ?$ElementType<Scalars, "ID">,
  outputOf?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  flowQuantity?: ?IQuantityValue,
  unitQuantity?: ?IQuantityValue,
  availableQuantity?: ?IQuantityValue,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  image?: ?$ElementType<Scalars, "URI">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  atLocation?: ?$ElementType<Scalars, "ID">,
  underAgreement?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">
};

export type IntentResponse = {
  __typename?: "IntentResponse",
  intent: Intent
};

export type IntentUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  action?: ?$ElementType<Scalars, "ID">,
  inputOf?: ?$ElementType<Scalars, "ID">,
  outputOf?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  flowQuantity?: ?IQuantityValue,
  unitQuantity?: ?IQuantityValue,
  availableQuantity?: ?IQuantityValue,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  image?: ?$ElementType<Scalars, "URI">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  atLocation?: ?$ElementType<Scalars, "ID">,
  underAgreement?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">
};

/** Mutation input structure for defining measurements. Should be nulled if not present, rather than empty. */
export type IQuantityValue = {
  numericValue: $ElementType<Scalars, "Float">,
  unit: $ElementType<Scalars, "ID">
};

export type Mutation = {
  __typename?: "Mutation",
  createPerson?: ?PersonResponse,
  updatePerson?: ?PersonResponse,
  deletePerson?: ?PersonResponse,
  createOrganization?: ?OrganizationResponse,
  updateOrganization?: ?OrganizationResponse,
  deleteOrganization?: ?OrganizationResponse,
  createAgentRelationship?: ?AgentRelationshipResponse,
  updateAgentRelationship?: ?AgentRelationshipResponse,
  deleteAgentRelationship?: ?AgentRelationshipResponse,
  createAgentRelationshipRole?: ?AgentRelationshipRoleResponse,
  updateAgentRelationshipRole?: ?AgentRelationshipRoleResponse,
  deleteAgentRelationshipRole?: ?AgentRelationshipRoleResponse,
  createEconomicEvent?: ?EconomicEventResponse,
  updateEconomicEvent?: ?EconomicEventResponse,
  deleteEconomicEvent?: ?EconomicEventResponse,
  updateEconomicResource?: ?EconomicResourceResponse,
  deleteEconomicResource?: ?EconomicResourceResponse,
  createProcess?: ?ProcessResponse,
  updateProcess?: ?ProcessResponse,
  deleteProcess?: ?ProcessResponse,
  createTransfer?: ?TransferResponse,
  updateTransfer?: ?TransferResponse,
  deleteTransfer?: ?TransferResponse,
  createAppreciation?: ?AppreciationResponse,
  updateAppreciation?: ?AppreciationResponse,
  deleteAppreciation?: ?AppreciationResponse,
  createCommitment?: ?CommitmentResponse,
  updateCommitment?: ?CommitmentResponse,
  deleteCommitment?: ?CommitmentResponse,
  createIntent?: ?IntentResponse,
  updateIntent?: ?IntentResponse,
  deleteIntent?: ?IntentResponse,
  createFulfillment?: ?FulfillmentResponse,
  updateFulfillment?: ?FulfillmentResponse,
  deleteFulfillment?: ?FulfillmentResponse,
  createSatisfaction?: ?SatisfactionResponse,
  updateSatisfaction?: ?SatisfactionResponse,
  deleteSatisfaction?: ?SatisfactionResponse,
  createPlan?: ?PlanResponse,
  updatePlan?: ?PlanResponse,
  deletePlan?: ?PlanResponse,
  createAgreement?: ?AgreementResponse,
  updateAgreement?: ?AgreementResponse,
  deleteAgreement?: ?AgreementResponse,
  createClaim?: ?ClaimResponse,
  updateClaim?: ?ClaimResponse,
  deleteClaim?: ?ClaimResponse,
  createSettlement?: ?SettlementResponse,
  updateSettlement?: ?SettlementResponse,
  deleteSettlement?: ?SettlementResponse,
  createResourceSpecification?: ?ResourceSpecificationResponse,
  updateResourceSpecification?: ?ResourceSpecificationResponse,
  deleteResourceSpecification?: ?ResourceSpecificationResponse,
  createRecipeFlow?: ?RecipeFlowResponse,
  updateRecipeFlow?: ?RecipeFlowResponse,
  deleteRecipeFlow?: ?RecipeFlowResponse,
  createRecipeProcess?: ?RecipeProcessResponse,
  updateRecipeProcess?: ?RecipeProcessResponse,
  deleteRecipeProcess?: ?RecipeProcessResponse
};

export type MutationCreatePersonArgs = {
  person: AgentCreateParams
};

export type MutationUpdatePersonArgs = {
  person: AgentUpdateParams
};

export type MutationDeletePersonArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateOrganizationArgs = {
  organization: AgentCreateParams
};

export type MutationUpdateOrganizationArgs = {
  organization: AgentUpdateParams
};

export type MutationDeleteOrganizationArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateAgentRelationshipArgs = {
  relationship: AgentRelationshipCreateParams
};

export type MutationUpdateAgentRelationshipArgs = {
  relationship: AgentRelationshipUpdateParams
};

export type MutationDeleteAgentRelationshipArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: ?AgentRelationshipRoleCreateParams
};

export type MutationUpdateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: ?AgentRelationshipRoleUpdateParams
};

export type MutationDeleteAgentRelationshipRoleArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateEconomicEventArgs = {
  event: EconomicEventCreateParams,
  createResource?: ?EconomicResourceCreateParams
};

export type MutationUpdateEconomicEventArgs = {
  event: EconomicEventUpdateParams
};

export type MutationDeleteEconomicEventArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationUpdateEconomicResourceArgs = {
  resource: EconomicResourceUpdateParams
};

export type MutationDeleteEconomicResourceArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateProcessArgs = {
  process: ProcessCreateParams
};

export type MutationUpdateProcessArgs = {
  process: ProcessUpdateParams
};

export type MutationDeleteProcessArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateTransferArgs = {
  transfer: TransferCreateParams
};

export type MutationUpdateTransferArgs = {
  transfer: TransferUpdateParams
};

export type MutationDeleteTransferArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateAppreciationArgs = {
  appreciation: AppreciationCreateParams
};

export type MutationUpdateAppreciationArgs = {
  appreciation: AppreciationUpdateParams
};

export type MutationDeleteAppreciationArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateCommitmentArgs = {
  commitment?: ?CommitmentCreateParams
};

export type MutationUpdateCommitmentArgs = {
  commitment?: ?CommitmentUpdateParams
};

export type MutationDeleteCommitmentArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateIntentArgs = {
  intent?: ?IntentCreateParams
};

export type MutationUpdateIntentArgs = {
  intent?: ?IntentUpdateParams
};

export type MutationDeleteIntentArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateFulfillmentArgs = {
  fulfillment: FulfillmentCreateParams
};

export type MutationUpdateFulfillmentArgs = {
  fulfillment: FulfillmentUpdateParams
};

export type MutationDeleteFulfillmentArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateSatisfactionArgs = {
  satisfaction?: ?SatisfactionCreateParams
};

export type MutationUpdateSatisfactionArgs = {
  satisfaction?: ?SatisfactionUpdateParams
};

export type MutationDeleteSatisfactionArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreatePlanArgs = {
  plan: PlanCreateParams
};

export type MutationUpdatePlanArgs = {
  plan: PlanUpdateParams
};

export type MutationDeletePlanArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateAgreementArgs = {
  agreement?: ?AgreementCreateParams
};

export type MutationUpdateAgreementArgs = {
  agreement?: ?AgreementUpdateParams
};

export type MutationDeleteAgreementArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateClaimArgs = {
  claim: ClaimCreateParams
};

export type MutationUpdateClaimArgs = {
  claim: ClaimUpdateParams
};

export type MutationDeleteClaimArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateSettlementArgs = {
  settlement: SettlementCreateParams
};

export type MutationUpdateSettlementArgs = {
  s0ettlement: SettlementUpdateParams
};

export type MutationDeleteSettlementArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateResourceSpecificationArgs = {
  resourceSpecification?: ?ResourceSpecificationCreateParams
};

export type MutationUpdateResourceSpecificationArgs = {
  resourceSpecification?: ?ResourceSpecificationUpdateParams
};

export type MutationDeleteResourceSpecificationArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateRecipeFlowArgs = {
  recipeFlow?: ?RecipeFlowCreateParams
};

export type MutationUpdateRecipeFlowArgs = {
  recipeFlow?: ?RecipeFlowUpdateParams
};

export type MutationDeleteRecipeFlowArgs = {
  id: $ElementType<Scalars, "String">
};

export type MutationCreateRecipeProcessArgs = {
  recipeProcess?: ?RecipeProcessCreateParams
};

export type MutationUpdateRecipeProcessArgs = {
  recipeProcess?: ?RecipeProcessUpdateParams
};

export type MutationDeleteRecipeProcessArgs = {
  id: $ElementType<Scalars, "String">
};

/** A formal or informal group, or legal organization. */
export type Organization = Agent & {
  __typename?: "Organization",
  id: $ElementType<Scalars, "ID">,
  /** The name that this agent will be referred to by. */
  name: $ElementType<Scalars, "String">,
  /** A 'profile image' for this agent. */
  image?: ?$ElementType<Scalars, "URI">,
  /** Optional email address contact for this agent. */
  email?: ?$ElementType<Scalars, "String">,
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: ?SpatialThing,
  note?: ?$ElementType<Scalars, "String">,
  inventoriedEconomicResources?: ?Array<EconomicResource>,
  economicEvents?: ?Array<EconomicEvent>,
  processes?: ?Array<Process>,
  commitments?: ?Array<Commitment>,
  intents?: ?Array<Intent>,
  plans?: ?Array<Plan>,
  relationships?: ?Array<AgentRelationship>,
  relationshipsAsSubject?: ?Array<AgentRelationship>,
  relationshipsAsObject?: ?Array<AgentRelationship>,
  roles?: ?Array<AgentRelationshipRole>,
  recipes?: ?Array<ResourceSpecification>
};

/** A formal or informal group, or legal organization. */
export type OrganizationInventoriedEconomicResourcesArgs = {
  filter?: ?AgentResourceSearchParams
};

/** A formal or informal group, or legal organization. */
export type OrganizationEconomicEventsArgs = {
  filter?: ?AgentEventSearchParams
};

/** A formal or informal group, or legal organization. */
export type OrganizationProcessesArgs = {
  filter?: ?AgentProcessSearchParams
};

/** A formal or informal group, or legal organization. */
export type OrganizationCommitmentsArgs = {
  filter?: ?AgentCommitmentSearchParams
};

/** A formal or informal group, or legal organization. */
export type OrganizationIntentsArgs = {
  filter?: ?AgentIntentSearchParams
};

/** A formal or informal group, or legal organization. */
export type OrganizationPlansArgs = {
  filter?: ?AgentPlanSearchParams
};

/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsSubjectArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsObjectArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

export type OrganizationResponse = {
  __typename?: "OrganizationResponse",
  agent: Organization
};

/** A natural person. */
export type Person = Agent & {
  __typename?: "Person",
  id: $ElementType<Scalars, "ID">,
  /** The name that this agent will be referred to by. */
  name: $ElementType<Scalars, "String">,
  /** A 'profile image' for this agent. */
  image?: ?$ElementType<Scalars, "URI">,
  /** Optional email address contact for this agent. */
  email?: ?$ElementType<Scalars, "String">,
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: ?SpatialThing,
  note?: ?$ElementType<Scalars, "String">,
  inventoriedEconomicResources?: ?Array<EconomicResource>,
  economicEvents?: ?Array<EconomicEvent>,
  processes?: ?Array<Process>,
  commitments?: ?Array<Commitment>,
  intents?: ?Array<Intent>,
  plans?: ?Array<Plan>,
  relationships?: ?Array<AgentRelationship>,
  relationshipsAsSubject?: ?Array<AgentRelationship>,
  relationshipsAsObject?: ?Array<AgentRelationship>,
  roles?: ?Array<AgentRelationshipRole>,
  recipes?: ?Array<ResourceSpecification>
};

/** A natural person. */
export type PersonInventoriedEconomicResourcesArgs = {
  filter?: ?AgentResourceSearchParams
};

/** A natural person. */
export type PersonEconomicEventsArgs = {
  filter?: ?AgentEventSearchParams
};

/** A natural person. */
export type PersonProcessesArgs = {
  filter?: ?AgentProcessSearchParams
};

/** A natural person. */
export type PersonCommitmentsArgs = {
  filter?: ?AgentCommitmentSearchParams
};

/** A natural person. */
export type PersonIntentsArgs = {
  filter?: ?AgentIntentSearchParams
};

/** A natural person. */
export type PersonPlansArgs = {
  filter?: ?AgentPlanSearchParams
};

/** A natural person. */
export type PersonRelationshipsArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** A natural person. */
export type PersonRelationshipsAsSubjectArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

/** A natural person. */
export type PersonRelationshipsAsObjectArgs = {
  roleId?: ?$ElementType<Scalars, "ID">
};

export type PersonResponse = {
  __typename?: "PersonResponse",
  agent: Person
};

/** A logical collection of processes that constitute a body of planned work with defined deliverable(s).
 * NOTE: Not accepted in VF.  Other option is to be a high level process.
 */
export type Plan = {
  __typename?: "Plan",
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  created?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  processes?: ?Array<Process>,
  independentDemands?: ?Array<Commitment>
};

/** A logical collection of processes that constitute a body of planned work with defined deliverable(s).
 * NOTE: Not accepted in VF.  Other option is to be a high level process.
 */
export type PlanProcessesArgs = {
  filter?: ?PlanProcessSearchParams
};

export type PlanCreateParams = {
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  created?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

/** Query parameters for reading `Process`es related to a `Plan` */
export type PlanProcessSearchParams = {
  searchString?: ?$ElementType<Scalars, "String">,
  after?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">
};

export type PlanResponse = {
  __typename?: "PlanResponse",
  plan?: ?Plan
};

export type PlanUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  created?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type Process = {
  __typename?: "Process",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact end of flow or process */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred prior to this specific time */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** Indicates the flow or process occurred after this specific time */
  after?: ?$ElementType<Scalars, "DateTime">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** The recipe definition or specification for a process. */
  basedOn?: ?RecipeProcess,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** The process with its inputs and outputs is part of the plan. */
  plannedWithin?: ?Plan,
  inputs?: ?Array<EconomicEvent>,
  outputs?: ?Array<EconomicEvent>,
  unplannedEconomicEvents?: ?Array<EconomicEvent>,
  committedInputs?: ?Array<Commitment>,
  committedOutputs?: ?Array<Commitment>,
  intendedInputs?: ?Array<Intent>,
  intendedOutputs?: ?Array<Intent>,
  nextProcesses?: ?Array<Process>,
  previousProcesses?: ?Array<Process>,
  workingAgents?: ?Array<Agent>,
  trace?: ?Array<EconomicEvent>,
  track?: ?Array<EconomicEvent>
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessInputsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessOutputsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessUnplannedEconomicEventsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedInputsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedOutputsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedInputsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedOutputsArgs = {
  action?: ?$ElementType<Scalars, "ID">
};

export type ProcessCreateParams = {
  name: $ElementType<Scalars, "String">,
  hasDuration?: ?IDuration,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  plannedWithin?: ?$ElementType<Scalars, "ID">
};

export type ProcessResponse = {
  __typename?: "ProcessResponse",
  process?: ?Process
};

export type ProcessUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  hasDuration?: ?IDuration,
  finished?: ?$ElementType<Scalars, "Boolean">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  plannedWithin?: ?$ElementType<Scalars, "ID">
};

export type ProductionFlowItem = Process | Transfer | EconomicResource;

/** Published requests or offers, sometimes with what is expected in return.
 * NOTE: Not approved in VF.
 */
export type Proposal = {
  __typename?: "Proposal",
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  /** Specific time marking the exact beginning of proposal publication. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** Specific time marking the exact end of proposal publication. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  eligibleLocation?: ?SpatialThing,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  created?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">,
  publishes?: ?Array<ProposedIntent>
};

/** Supports including intents in multiple proposals, as well as a proposal including multiple intents.
 * NOTE: Not approved in VF.
 */
export type ProposedIntent = {
  __typename?: "ProposedIntent",
  id: $ElementType<Scalars, "ID">,
  /** This is a reciprocal intent of this proposal, not primary. Not meant to be part of intent matching. */
  reciprocal?: ?$ElementType<Scalars, "Boolean">,
  /** The intent which is part of this published proposal. */
  publishes: Intent,
  /** The published proposal which this intent is part of. */
  publishedIn: Proposal
};

/** Semantic meaning for measurements: binds a quantity to its measurement unit.
 * See http://www.qudt.org/pages/QUDToverviewPage.html
 */
export type QuantityValue = {
  __typename?: "QuantityValue",
  numericValue: $ElementType<Scalars, "Float">,
  unit?: ?Unit
};

export type Query = {
  __typename?: "Query",
  myAgent?: ?Agent,
  agent?: ?Agent,
  allAgents?: ?Array<Agent>,
  organization?: ?Organization,
  allOrganizations?: ?Array<Organization>,
  person?: ?Person,
  allPeople?: ?Array<Person>,
  agentRelationship?: ?AgentRelationship,
  allAgentRelationships?: ?Array<AgentRelationship>,
  agentRelationshipRole?: ?AgentRelationshipRole,
  allAgentRelationshipRoles?: ?Array<AgentRelationshipRole>,
  economicEvent?: ?EconomicEvent,
  allEconomicEvents?: ?Array<EconomicEvent>,
  filteredEconomicEvents?: ?Array<EconomicEvent>,
  fulfillment?: ?Fulfillment,
  allFulfillments?: ?Array<Fulfillment>,
  economicResource?: ?EconomicResource,
  allEconomicResources?: ?Array<EconomicResource>,
  process?: ?Process,
  allProcesses?: ?Array<Process>,
  transfer?: ?Transfer,
  allTransfers?: ?Array<Transfer>,
  commitment?: ?Commitment,
  allCommitments?: ?Array<Commitment>,
  satisfaction?: ?Satisfaction,
  allSatisfactions?: ?Array<Satisfaction>,
  plan?: ?Plan,
  allPlans?: ?Array<Plan>,
  agreement?: ?Agreement,
  allAgreements?: ?Array<Agreement>,
  resourceSpecification?: ?ResourceSpecification,
  allResourceSpecifications?: ?Array<ResourceSpecification>,
  recipeProcess?: ?RecipeProcess,
  allRecipeProcesses?: ?Array<RecipeProcess>,
  recipeFlow?: ?RecipeFlow,
  allRecipeFlows?: ?Array<RecipeFlow>,
  action?: ?Action,
  allActions?: ?Array<Action>,
  unit?: ?Unit,
  allUnits?: ?Array<Unit>,
  quantityValue?: ?QuantityValue,
  spatialThing?: ?SpatialThing,
  allSpatialThings?: ?Array<SpatialThing>
};

export type QueryAgentArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryOrganizationArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryPersonArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryAgentRelationshipArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryAgentRelationshipRoleArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryEconomicEventArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryFilteredEconomicEventsArgs = {
  providerId?: ?$ElementType<Scalars, "ID">,
  receiverId?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  action?: ?$ElementType<Scalars, "ID">,
  startDate?: ?$ElementType<Scalars, "String">,
  endDate?: ?$ElementType<Scalars, "String">
};

export type QueryFulfillmentArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryEconomicResourceArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryProcessArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryTransferArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryCommitmentArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QuerySatisfactionArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryPlanArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryAgreementArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryResourceSpecificationArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryRecipeProcessArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryRecipeFlowArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryActionArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryUnitArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryQuantityValueArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QuerySpatialThingArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

/** The linkage between a recipe process, an action that structures a recipe, and a resource specification. */
export type RecipeFlow = {
  __typename?: "RecipeFlow",
  id: $ElementType<Scalars, "ID">,
  flowQuantity?: ?QuantityValue,
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: ?ResourceSpecification,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Relates an input flow to it's node in a recipe. */
  recipeInputOf?: ?RecipeProcess,
  /** Relates an output flow to it's node in a recipe. */
  recipeOutputOf?: ?RecipeProcess,
  note?: ?$ElementType<Scalars, "String">
};

export type RecipeFlowCreateParams = {
  action: $ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  flowQuantity?: ?IQuantityValue,
  recipeInputOf?: ?$ElementType<Scalars, "ID">,
  recipeOutputOf?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

export type RecipeFlowResponse = {
  __typename?: "RecipeFlowResponse",
  recipeFlow?: ?RecipeFlow
};

export type RecipeFlowUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  action?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  flowQuantity?: ?IQuantityValue,
  recipeInputOf?: ?$ElementType<Scalars, "ID">,
  recipeOutputOf?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

/** Specifies the process part of a recipe for use in planning from recipe. */
export type RecipeProcess = {
  __typename?: "RecipeProcess",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  hasDuration?: ?Duration,
  /** The multiplier for duration based on capacities for the recipe. */
  durationMultiplier?: ?$ElementType<Scalars, "Float">,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Agent
};

export type RecipeProcessCreateParams = {
  name: $ElementType<Scalars, "String">,
  hasDuration?: ?IDuration,
  durationMultiplier?: ?$ElementType<Scalars, "Float">,
  processClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">
};

export type RecipeProcessResponse = {
  __typename?: "RecipeProcessResponse",
  recipeProcess?: ?RecipeProcess
};

export type RecipeProcessUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  hasDuration?: ?IDuration,
  durationMultiplier?: ?$ElementType<Scalars, "Float">,
  processClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">
};

/** A reference to some external agreement between agents which specifies the rules
 * or policies or calculations which govern a flow.
 */
export type ReferencedAgreement = {
  __typename?: "ReferencedAgreement",
  id: $ElementType<Scalars, "URI">
};

/** Specification of a kind of resource. Could define a material item, service, digital item, currency account, etc.
 * Used instead of a classification when more information is needed, particularly for recipes.
 */
export type ResourceSpecification = {
  __typename?: "ResourceSpecification",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  /** The unit expected for this resource specification as a default. */
  unit?: ?Unit,
  /** Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
   */
  substitutable?: ?$ElementType<Scalars, "Boolean">,
  image?: ?$ElementType<Scalars, "URI">,
  note?: ?$ElementType<Scalars, "String">,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  conformingResources?: ?Array<EconomicResource>
};

export type ResourceSpecificationCreateParams = {
  name: $ElementType<Scalars, "String">,
  unit?: ?$ElementType<Scalars, "ID">,
  substitutable?: ?$ElementType<Scalars, "Boolean">,
  image?: ?$ElementType<Scalars, "URI">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">
};

export type ResourceSpecificationResponse = {
  __typename?: "ResourceSpecificationResponse",
  resourceSpecification?: ?ResourceSpecification
};

export type ResourceSpecificationUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  unit?: ?$ElementType<Scalars, "ID">,
  substitutable?: ?$ElementType<Scalars, "Boolean">,
  image?: ?$ElementType<Scalars, "URI">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">
};

/** A commitment or economic event that partially or fully satisfies an intent. */
export type Satisfaction = {
  __typename?: "Satisfaction",
  id: $ElementType<Scalars, "ID">,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Intent,
  /** A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: EventOrCommitment,
  /** The quantity of the satisfaction of an commitment towards an intent. */
  satisfiedQuantity?: ?QuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

export type SatisfactionCreateParams = {
  satisfies: $ElementType<Scalars, "ID">,
  satisfiedBy: $ElementType<Scalars, "ID">,
  satisfiedQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

export type SatisfactionResponse = {
  __typename?: "SatisfactionResponse",
  satisfaction?: ?Satisfaction
};

export type SatisfactionUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  satisfies?: ?$ElementType<Scalars, "ID">,
  satisfiedBy?: ?$ElementType<Scalars, "ID">,
  satisfiedQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

/** The quantity that the economic event settled of the claim. */
export type Settlement = {
  __typename?: "Settlement",
  id: $ElementType<Scalars, "ID">,
  /** A `Claim` which is fully or partially settled by an `EconomicEvent`. */
  settles: Claim,
  /** The `EconomicEvent` fully or partially settling a `Claim`. */
  settledBy: EconomicEvent,
  /** The quantity of the settlement of an `EconomicEvent` towards a `Claim`. */
  settledQuantity?: ?QuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

export type SettlementCreateParams = {
  settles: $ElementType<Scalars, "ID">,
  settledBy: $ElementType<Scalars, "ID">,
  settledQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

export type SettlementResponse = {
  __typename?: "SettlementResponse",
  settlement?: ?Settlement
};

export type SettlementUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  settles?: ?$ElementType<Scalars, "ID">,
  settledBy?: ?$ElementType<Scalars, "ID">,
  settledQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

/** A physical mappable location. */
export type SpatialThing = {
  __typename?: "SpatialThing",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  mappableAddress?: ?$ElementType<Scalars, "String">,
  lat?: ?$ElementType<Scalars, "Float">,
  long?: ?$ElementType<Scalars, "Float">,
  alt?: ?$ElementType<Scalars, "Float">,
  note?: ?$ElementType<Scalars, "String">,
  economicResources?: ?Array<EconomicResource>,
  agents?: ?Array<Agent>,
  economicEvents?: ?Array<EconomicEvent>,
  commitments?: ?Array<Commitment>,
  intents?: ?Array<Intent>
};

export const TimeUnitValues = Object.freeze({
  Year: "year",
  Month: "month",
  Week: "week",
  Day: "day",
  Hour: "hour",
  Minute: "minute",
  Second: "second"
});

/** Defines the unit of time measured in a temporal `Duration`. */
export type TimeUnit = $Values<typeof TimeUnitValues>;

/** An activity that assigns the rights and responsibilities for an economic resource from one agent to another. */
export type Transfer = {
  __typename?: "Transfer",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  economicEvents?: ?Array<EconomicEvent>,
  giveEconomicEvent?: ?EconomicEvent,
  takeEconomicEvent?: ?EconomicEvent,
  transferCommitments?: ?Array<Commitment>,
  giveCommitment?: ?Commitment,
  takeCommitment?: ?Commitment,
  involvedAgents?: ?Array<Agent>,
  trace?: ?Array<EconomicEvent>,
  track?: ?Array<EconomicEvent>
};

export type TransferCreateParams = {
  name: $ElementType<Scalars, "String">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

export type TransferResponse = {
  __typename?: "TransferResponse",
  Transfer?: ?Transfer
};

export type TransferUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">
};

/** Defines a unit of measurement, along with its display symbol.
 * See http://qudt.org/1.1/vocab/unit
 */
export type Unit = {
  __typename?: "Unit",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  symbol: $ElementType<Scalars, "String">
};
