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
  /** The `DateTime` scalar type represents a DateTime value as specified by
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: Date,
  /** A type which allows any arbitrary value to be set */
  AnyType: any
};

/** An action verb defining the kind of event, commitment, or intent.
 * It is recommended that the lowercase action verb should be used as the record ID
 * in order that references to `Action`s elsewhere in the system are easily readable.
 */
export type Action = {
  __typename?: "Action",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an object. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The effect of an economic event on a resource, increment, decrement, no
   * effect, or decrement resource and increment 'to' resource.
   */
  resourceEffect: $ElementType<Scalars, "String">
};

/** A person or group or organization with economic agency. */
export type Agent = {
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: ?$ElementType<Scalars, "URI">,
  /** Optional email address contact for this agent. */
  email?: ?$ElementType<Scalars, "String">,
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: ?SpatialThing,
  /** A textual description or comment. */
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

/** The role of an economic relationship that exists between 2 agents, such as member, trading partner. */
export type AgentRelationship = {
  __typename?: "AgentRelationship",
  id: $ElementType<Scalars, "ID">,
  /** The subject of a relationship between 2 agents.  For example, if Mary is a member of a group, then Mary is the subject. */
  subject: Agent,
  /** The object of a relationship between 2 agents.  For example, if Mary is a member of a group, then the group is the object. */
  object: Agent,
  /** A kind of relationship that exists between 2 agents. */
  relationship: AgentRelationshipRole,
  /** A textual description or comment. */
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
  /** The human readable name of the role, from the subject to the object. */
  label: $ElementType<Scalars, "String">,
  /** The human readable name of the role, from the object to the subject. */
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
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: ?$ElementType<Scalars, "String">,
  /** The date and time the agreement was created. */
  created?: ?$ElementType<Scalars, "DateTime">,
  /** A textual description or comment. */
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
  appreciationOf: EconomicEvent,
  /** The `EconomicEvent` provided as a gift in this appreciation */
  appreciationWith: EconomicEvent,
  /** A textual description or comment. */
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

/** A claim for a future economic event(s) in reciprocity for an economic event that
 * already occurred. For example, a claim for payment for goods received.
 */
export type Claim = {
  __typename?: "Claim",
  id: $ElementType<Scalars, "ID">,
  /** Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** The economic agent from whom the claim is initiated. */
  provider: Agent,
  /** The economic agent whom the claim is for. */
  receiver: Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: ?ResourceSpecification,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** The economic event which already occurred which this claim has been made against. */
  triggeredBy: EconomicEvent,
  /** Indicates that the claim must be filled before the given date. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** The data on which the claim was made. */
  created?: ?$ElementType<Scalars, "DateTime">,
  /** The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
   */
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: ?AnyAgreement,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>
};

export type ClaimCreateParams = {
  action?: ?$ElementType<Scalars, "ID">,
  provider?: ?$ElementType<Scalars, "ID">,
  receiver?: ?$ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
  triggeredBy?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">,
  agreedIn?: ?$ElementType<Scalars, "ID">,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
  triggeredBy?: ?$ElementType<Scalars, "ID">,
  finished?: ?$ElementType<Scalars, "Boolean">,
  note?: ?$ElementType<Scalars, "String">,
  agreedIn?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">
};

/** A planned economic flow that has been promised by an agent to another agent. */
export type Commitment = {
  __typename?: "Commitment",
  id: $ElementType<Scalars, "ID">,
  /** Relates a commitment to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Defines the process to which this commitment is an input. */
  inputOf?: ?Process,
  /** Defines the process for which this commitment is an output. */
  outputOf?: ?Process,
  /** The economic agent from whom the commitment is initiated. */
  provider?: ?Agent,
  /** The economic agent whom the commitment is for. */
  receiver?: ?Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: ?ResourceSpecification,
  /** Economic resource involved in the commitment. */
  resourceInventoriedAs?: ?EconomicResource,
  /** References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
   */
  stage?: ?ProcessSpecification,
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: ?Action,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** The planned beginning of the commitment. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** The planned end of the commitment. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** The due date/time of the commitment. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** The commitment can start after this date/time. */
  after?: ?$ElementType<Scalars, "DateTime">,
  /** The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
   */
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** The place where a commitment occurs.  Usually mappable. */
  atLocation?: ?SpatialThing,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
   */
  agreedIn?: ?AnyAgreement,
  /** This commitment is part of the agreement. */
  clauseOf?: ?Agreement,
  /** Represents a desired deliverable expected from this plan. */
  independentDemandOf?: ?Plan,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: ?Array<Fulfillment>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: ?Array<Satisfaction>,
  involvedAgents?: ?Array<Agent>,
  plan?: ?Plan,
  /** The commitment can be safely deleted, has no dependent information. */
  deletable?: ?$ElementType<Scalars, "Boolean">
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  before?: ?$ElementType<Scalars, "DateTime">,
  after?: ?$ElementType<Scalars, "DateTime">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  independentDemandOf?: ?$ElementType<Scalars, "ID">,
  atLocation?: ?$ElementType<Scalars, "ID">,
  agreedIn?: ?$ElementType<Scalars, "ID">,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  agreedIn?: ?$ElementType<Scalars, "ID">,
  underExternalAgreement?: ?$ElementType<Scalars, "URI">,
  clauseOf?: ?$ElementType<Scalars, "ID">
};

/** A `Duration` represents an interval between two `DateTime` values. */
export type Duration = {
  __typename?: "Duration",
  numericDuration: $ElementType<Scalars, "Float">,
  unitType: TimeUnit
};

/** An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 */
export type EconomicEvent = {
  __typename?: "EconomicEvent",
  id: $ElementType<Scalars, "ID">,
  /** Relates an economic event to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Defines the process to which this event is an input. */
  inputOf?: ?Process,
  /** Defines the process for which this event is an output. */
  outputOf?: ?Process,
  /** The economic agent from whom the actual economic event is initiated. */
  provider?: ?Agent,
  /** The economic agent whom the actual economic event is for. */
  receiver?: ?Agent,
  /** Economic resource involved in the economic event. */
  resourceInventoriedAs?: ?EconomicResource,
  /** Additional economic resource on the economic event when needed by the
   * receiver. Used when a transfer or move, or sometimes other actions, requires
   * explicitly identifying an economic resource on the receiving side.
   */
  toResourceInventoriedAs?: ?EconomicResource,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: ?ResourceSpecification,
  /** The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
   */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** The beginning of the economic event. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** The end of the economic event. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** The date/time at which the economic event occurred. Can be used instead of beginning and end. */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** The economic event occurred prior to this date/time. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** The economic event occurred after this date/time. */
  after?: ?$ElementType<Scalars, "DateTime">,
  /** The place where an economic event occurs.  Usually mappable. */
  atLocation?: ?SpatialThing,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
   */
  agreedIn?: ?AnyAgreement,
  /** This economic event occurs as part of this agreement. */
  realizationOf?: ?Agreement,
  /** References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: ?EconomicEvent,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: ?Array<Fulfillment>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: ?Array<Satisfaction>,
  appreciationOf?: ?Array<EconomicEvent>,
  appreciatedBy?: ?Array<EconomicEvent>,
  track?: ?Array<ProductionFlowItem>,
  trace?: ?Array<ProductionFlowItem>,
  /** The economic event can be safely deleted, has no dependent information. */
  deletable?: ?$ElementType<Scalars, "Boolean">
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  /** References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
   */
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  conformsTo: ResourceSpecification,
  /** Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
   */
  trackingIdentifier?: ?$ElementType<Scalars, "String">,
  /** Lot or batch of an economic resource, used to track forward or backwards to
   * all occurrences of resources of that lot. Note more than one resource can be
   * of the same lot.
   */
  lot?: ?ProductBatch,
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: ?$ElementType<Scalars, "URI">,
  /** The current amount and unit of the economic resource for which the agent has
   * primary rights and responsibilities, sometimes thought of as ownership. This
   * can be either stored or derived from economic events affecting the resource.
   */
  accountingQuantity?: ?QuantityValue,
  /** The current amount and unit of the economic resource which is under direct
   * control of the agent.  It may be more or less than the accounting quantity.
   * This can be either stored or derived from economic events affecting the resource.
   */
  onhandQuantity?: ?QuantityValue,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: ?Unit,
  /** References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
   */
  stage?: ?ProcessSpecification,
  /** The state of the desired economic resource (pass or fail), after coming out of
   * a test or review process. Can be derived from the last event if a pass or fail event.
   */
  state?: ?Action,
  /** Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: ?EconomicResource,
  /** The current place an economic resource is located. Could be at any level of
   * granularity, from a town to an address to a warehouse location. Usually mappable.
   */
  currentLocation?: ?SpatialThing,
  /** Used when a stock economic resource contains units also defined as economic resources. */
  contains?: ?Array<EconomicResource>,
  trace?: ?Array<EconomicEvent>,
  track?: ?Array<EconomicEvent>
};

/** Input `EconomicResource` type used when sending events to setup initial resource recordings */
export type EconomicResourceCreateParams = {
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  resourceConformsTo?: ?$ElementType<Scalars, "ID">,
  trackingIdentifier?: ?$ElementType<Scalars, "String">,
  image?: ?$ElementType<Scalars, "URI">,
  accountingQuantity?: ?IQuantityValue,
  onhandQuantity?: ?IQuantityValue,
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
  accountingQuantity?: ?IQuantityValue,
  onhandQuantity?: ?IQuantityValue,
  currentLocation?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">,
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>
};

export type EventOrCommitment = EconomicEvent | Commitment;

/** Represents many-to-many relationships between commitments and economic events
 * that fully or partially satisfy one or more commitments.
 */
export type Fulfillment = {
  __typename?: "Fulfillment",
  id: $ElementType<Scalars, "ID">,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: EconomicEvent,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Commitment,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
};

export type FulfillmentCreateParams = {
  fulfilledBy: $ElementType<Scalars, "ID">,
  fulfills: $ElementType<Scalars, "ID">,
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  /** Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** A `Process` to which this `Intent` is hoping to contribute towards. */
  inputOf?: ?Process,
  /** A `Process` which this `Intent` will eventuate as a result of. */
  outputOf?: ?Process,
  /** The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: ?Agent,
  /** The economic agent whom the intent is for.  This implies that the intent is a request */
  receiver?: ?Agent,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: ?ResourceSpecification,
  /** When a specific `EconomicResource` is known which can service the `Intent`, this defines that resource. */
  resourceInventoriedAs?: ?EconomicResource,
  /** The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
   */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** The total quantity of the offered resource available. */
  availableQuantity?: ?QuantityValue,
  /** The planned beginning of the intent. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** The planned end of the intent. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: ?$ElementType<Scalars, "DateTime">,
  /** The due date/time of the intent. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** The intent can start after this date/time. */
  after?: ?$ElementType<Scalars, "DateTime">,
  /** The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
   */
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** The place where an intent would occur.  Usually mappable. */
  atLocation?: ?SpatialThing,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: ?AnyAgreement,
  satisfiedBy?: ?Array<Satisfaction>,
  publishedIn?: ?Array<ProposedIntent>,
  /** The intent can be safely deleted, has no dependent information. */
  deletable?: ?$ElementType<Scalars, "Boolean">
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
  agreedIn?: ?$ElementType<Scalars, "ID">,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  agreedIn?: ?$ElementType<Scalars, "ID">,
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
  deletePerson?: ?$ElementType<Scalars, "Boolean">,
  createOrganization?: ?OrganizationResponse,
  updateOrganization?: ?OrganizationResponse,
  deleteOrganization?: ?$ElementType<Scalars, "Boolean">,
  createAgentRelationship?: ?AgentRelationshipResponse,
  updateAgentRelationship?: ?AgentRelationshipResponse,
  deleteAgentRelationship?: ?$ElementType<Scalars, "Boolean">,
  createAgentRelationshipRole?: ?AgentRelationshipRoleResponse,
  updateAgentRelationshipRole?: ?AgentRelationshipRoleResponse,
  deleteAgentRelationshipRole?: ?$ElementType<Scalars, "Boolean">,
  createEconomicEvent?: ?EconomicEventResponse,
  updateEconomicEvent?: ?EconomicEventResponse,
  deleteEconomicEvent?: ?$ElementType<Scalars, "Boolean">,
  updateEconomicResource?: ?EconomicResourceResponse,
  deleteEconomicResource?: ?$ElementType<Scalars, "Boolean">,
  createProcess?: ?ProcessResponse,
  updateProcess?: ?ProcessResponse,
  deleteProcess?: ?$ElementType<Scalars, "Boolean">,
  createAppreciation?: ?AppreciationResponse,
  updateAppreciation?: ?AppreciationResponse,
  deleteAppreciation?: ?$ElementType<Scalars, "Boolean">,
  createCommitment?: ?CommitmentResponse,
  updateCommitment?: ?CommitmentResponse,
  deleteCommitment?: ?$ElementType<Scalars, "Boolean">,
  createIntent?: ?IntentResponse,
  updateIntent?: ?IntentResponse,
  deleteIntent?: ?$ElementType<Scalars, "Boolean">,
  createFulfillment?: ?FulfillmentResponse,
  updateFulfillment?: ?FulfillmentResponse,
  deleteFulfillment?: ?$ElementType<Scalars, "Boolean">,
  createSatisfaction?: ?SatisfactionResponse,
  updateSatisfaction?: ?SatisfactionResponse,
  deleteSatisfaction?: ?$ElementType<Scalars, "Boolean">,
  createPlan?: ?PlanResponse,
  updatePlan?: ?PlanResponse,
  deletePlan?: ?$ElementType<Scalars, "Boolean">,
  createAgreement?: ?AgreementResponse,
  updateAgreement?: ?AgreementResponse,
  deleteAgreement?: ?$ElementType<Scalars, "Boolean">,
  createClaim?: ?ClaimResponse,
  updateClaim?: ?ClaimResponse,
  deleteClaim?: ?$ElementType<Scalars, "Boolean">,
  createSettlement?: ?SettlementResponse,
  updateSettlement?: ?SettlementResponse,
  deleteSettlement?: ?$ElementType<Scalars, "Boolean">,
  createResourceSpecification?: ?ResourceSpecificationResponse,
  updateResourceSpecification?: ?ResourceSpecificationResponse,
  deleteResourceSpecification?: ?$ElementType<Scalars, "Boolean">,
  createRecipeFlow?: ?RecipeFlowResponse,
  updateRecipeFlow?: ?RecipeFlowResponse,
  deleteRecipeFlow?: ?$ElementType<Scalars, "Boolean">,
  createRecipeProcess?: ?RecipeProcessResponse,
  updateRecipeProcess?: ?RecipeProcessResponse,
  deleteRecipeProcess?: ?$ElementType<Scalars, "Boolean">
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
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: ?$ElementType<Scalars, "URI">,
  /** Optional email address contact for this agent. */
  email?: ?$ElementType<Scalars, "String">,
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: ?SpatialThing,
  /** A textual description or comment. */
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
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: ?$ElementType<Scalars, "URI">,
  /** Optional email address contact for this agent. */
  email?: ?$ElementType<Scalars, "String">,
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: ?SpatialThing,
  /** A textual description or comment. */
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
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: ?$ElementType<Scalars, "String">,
  /** The date and time the plan was made. */
  created?: ?$ElementType<Scalars, "DateTime">,
  /** The due date and time of the plan. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** This plan refines a scenario, making it operational. */
  refinementOf?: ?Scenario,
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
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The planned beginning of the process. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** The planned end of the process. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** The due date/time of the process. */
  before?: ?$ElementType<Scalars, "DateTime">,
  /** The process can start after this date/time. */
  after?: ?$ElementType<Scalars, "DateTime">,
  /** The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
   */
  finished?: ?$ElementType<Scalars, "Boolean">,
  /** The definition or specification for a process. */
  basedOn?: ?ProcessSpecification,
  /** References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
   */
  classifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** A textual description or comment. */
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
  track?: ?Array<EconomicEvent>,
  /** The process can be safely deleted, has no dependent information. */
  deletable?: ?$ElementType<Scalars, "Boolean">
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

/** Specifies the kind of process. */
export type ProcessSpecification = {
  __typename?: "ProcessSpecification",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
};

export type ProcessSpecificationCreateParams = {
  name: $ElementType<Scalars, "String">,
  note?: ?$ElementType<Scalars, "String">
};

export type ProcessSpecificationResponse = {
  __typename?: "ProcessSpecificationResponse",
  processSpecification?: ?ProcessSpecification
};

export type ProcessSpecificationUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  note?: ?$ElementType<Scalars, "String">
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

/** A lot or batch, defining a resource produced at the same time in the same way.
 * From DataFoodConsortium vocabulary https://datafoodconsortium.gitbook.io/dfc-standard-documentation/.
 */
export type ProductBatch = {
  __typename?: "ProductBatch",
  id: $ElementType<Scalars, "ID">,
  /** The standard unique identifier of the batch. */
  batchNumber: $ElementType<Scalars, "String">,
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: ?$ElementType<Scalars, "DateTime">,
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: ?$ElementType<Scalars, "DateTime">
};

export type ProductionFlowItem = Process | EconomicResource;

/** Published requests or offers, sometimes with what is expected in return. */
export type Proposal = {
  __typename?: "Proposal",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: ?$ElementType<Scalars, "String">,
  /** The beginning date/time of proposal publication. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** The end date/time of proposal publication. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** Location or area where the proposal is valid. */
  eligibleLocation?: ?SpatialThing,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
   */
  unitBased?: ?$ElementType<Scalars, "Boolean">,
  /** The date and time the proposal was created. */
  created?: ?$ElementType<Scalars, "DateTime">,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  publishes?: ?Array<ProposedIntent>
};

/** Represents many-to-many relationships between Proposals and Intents, supporting
 * including intents in multiple proposals, as well as a proposal including
 * multiple intents.
 */
export type ProposedIntent = {
  __typename?: "ProposedIntent",
  id: $ElementType<Scalars, "ID">,
  /** This is a reciprocal intent of this proposal, not primary. Not meant to be used for intent matching. */
  reciprocal?: ?$ElementType<Scalars, "Boolean">,
  /** The intent which is part of this published proposal. */
  publishes: Intent,
  /** The published proposal which this intent is part of. */
  publishedIn: Proposal
};

/** An agent to which the proposal is to be published.  A proposal can be published to many agents. */
export type ProposedTo = {
  __typename?: "ProposedTo",
  id: $ElementType<Scalars, "ID">,
  /** The agent to which the proposal is published. */
  proposedTo: Agent,
  /** The proposal that is published to a specific agent. */
  proposed: Proposal
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
  recipeResource?: ?RecipeResource,
  allRecipeResources?: ?Array<RecipeResource>,
  processSpecification?: ?ProcessSpecification,
  allProcessSpecifications?: ?Array<ProcessSpecification>,
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

export type QueryRecipeResourceArgs = {
  id?: ?$ElementType<Scalars, "ID">
};

export type QueryProcessSpecificationArgs = {
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

/** The specification of a resource inflow to, or outflow from, a recipe process. */
export type RecipeFlow = {
  __typename?: "RecipeFlow",
  id: $ElementType<Scalars, "ID">,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** The resource definition referenced by this flow in the recipe. */
  recipeFlowResource?: ?RecipeResource,
  /** Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action: Action,
  /** Relates an input flow to its process in a recipe. */
  recipeInputOf?: ?RecipeProcess,
  /** Relates an output flow to its process in a recipe. */
  recipeOutputOf?: ?RecipeProcess,
  /** References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
   */
  stage?: ?ProcessSpecification,
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: ?Action,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
};

export type RecipeFlowCreateParams = {
  action: $ElementType<Scalars, "ID">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  recipeFlowResource?: ?$ElementType<Scalars, "ID">,
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
  recipeInputOf?: ?$ElementType<Scalars, "ID">,
  recipeOutputOf?: ?$ElementType<Scalars, "ID">,
  stage?: ?$ElementType<Scalars, "ID">,
  state?: ?$ElementType<Scalars, "ID">,
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
  recipeFlowResource?: ?$ElementType<Scalars, "ID">,
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
  recipeInputOf?: ?$ElementType<Scalars, "ID">,
  recipeOutputOf?: ?$ElementType<Scalars, "ID">,
  stage?: ?$ElementType<Scalars, "ID">,
  state?: ?$ElementType<Scalars, "ID">,
  note?: ?$ElementType<Scalars, "String">
};

/** Specifies a process in a recipe for use in planning from recipe. */
export type RecipeProcess = {
  __typename?: "RecipeProcess",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: ?Duration,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** The standard specification or definition of a process. */
  processConformsTo: ProcessSpecification,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
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

/** Specifies the resource as part of a recipe, for use in planning from recipe. */
export type RecipeResource = {
  __typename?: "RecipeResource",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an object. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The unit of inventory used for this resource in the recipe. */
  unitOfResource?: ?Unit,
  /** The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: ?Unit,
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: ?$ElementType<Scalars, "URI">,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: ?ResourceSpecification,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  /** Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
   */
  substitutable?: ?$ElementType<Scalars, "Boolean">
};

export type RecipeResourceCreateParams = {
  name: $ElementType<Scalars, "String">,
  unitOfResource?: ?$ElementType<Scalars, "ID">,
  unitOfEffort?: ?$ElementType<Scalars, "ID">,
  substitutable?: ?$ElementType<Scalars, "Boolean">,
  image?: ?$ElementType<Scalars, "URI">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">
};

export type RecipeResourceResponse = {
  __typename?: "RecipeResourceResponse",
  recipeResource?: ?RecipeResource
};

export type RecipeResourceUpdateParams = {
  id: $ElementType<Scalars, "ID">,
  name?: ?$ElementType<Scalars, "String">,
  unitOfResource?: ?$ElementType<Scalars, "ID">,
  unitOfEffort?: ?$ElementType<Scalars, "ID">,
  substitutable?: ?$ElementType<Scalars, "Boolean">,
  image?: ?$ElementType<Scalars, "URI">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
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
  /** An informal or formal textual identifier for an object. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: ?$ElementType<Scalars, "URI">,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">,
  conformingResources?: ?Array<EconomicResource>
};

export type ResourceSpecificationCreateParams = {
  name: $ElementType<Scalars, "String">,
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
  image?: ?$ElementType<Scalars, "URI">,
  resourceClassifiedAs?: ?Array<$ElementType<Scalars, "URI">>,
  note?: ?$ElementType<Scalars, "String">
};

/** Represents many-to-many relationships between intents and commitments or events
 * that partially or full satisfy one or more intents.
 */
export type Satisfaction = {
  __typename?: "Satisfaction",
  id: $ElementType<Scalars, "ID">,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Intent,
  /** A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: EventOrCommitment,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
};

export type SatisfactionCreateParams = {
  satisfies: $ElementType<Scalars, "ID">,
  satisfiedBy: $ElementType<Scalars, "ID">,
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
  note?: ?$ElementType<Scalars, "String">
};

/** An estimated or analytical logical collection of higher level processes used for budgeting, analysis, plan refinement, etc. */
export type Scenario = {
  __typename?: "Scenario",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: ?$ElementType<Scalars, "DateTime">,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: ?$ElementType<Scalars, "DateTime">,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: ?Array<$ElementType<Scalars, "AnyType">>,
  /** This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: ?Scenario,
  note?: ?$ElementType<Scalars, "String">
};

/** The type definition of one or more scenarios, such as Yearly Budget. */
export type ScenarioDefinition = {
  __typename?: "ScenarioDefinition",
  id: $ElementType<Scalars, "ID">,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: $ElementType<Scalars, "String">,
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: ?Duration,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
};

/** Represents many-to-many relationships between claim and economic events that fully or partially settle one or more claims. */
export type Settlement = {
  __typename?: "Settlement",
  id: $ElementType<Scalars, "ID">,
  /** A `Claim` which is fully or partially settled by an `EconomicEvent`. */
  settles: Claim,
  /** The `EconomicEvent` fully or partially settling a `Claim`. */
  settledBy: EconomicEvent,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: ?QuantityValue,
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: ?QuantityValue,
  /** A textual description or comment. */
  note?: ?$ElementType<Scalars, "String">
};

export type SettlementCreateParams = {
  settles: $ElementType<Scalars, "ID">,
  settledBy: $ElementType<Scalars, "ID">,
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  resourceQuantity?: ?IQuantityValue,
  effortQuantity?: ?IQuantityValue,
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
  /** A textual description or comment. */
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

/** Defines a unit of measurement, along with its display symbol.
 * See http://qudt.org/1.1/vocab/unit
 */
export type Unit = {
  __typename?: "Unit",
  id: $ElementType<Scalars, "ID">,
  name: $ElementType<Scalars, "String">,
  symbol: $ElementType<Scalars, "String">
};
