export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `URI` type simply declares a reference to an external web URL, Holochain entry or other resource. */
  URI: any;
  /** A type which allows any arbitrary value to be set */
  AnyType: any;
  /** The `DateTime` scalar type represents a DateTime value as specified by
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
};

/** An action verb defining the kind of event, commitment, or intent.
 * It is recommended that the lowercase action verb should be used as the record ID
 * in order that references to `Action`s elsewhere in the system are easily readable.
 */
export type Action = {
  __typename?: "Action";
  id: Scalars["ID"];
  name: Scalars["String"];
  resourceEffect: Scalars["String"];
};

/** A person or group or organization with economic agency. */
export type Agent = {
  __typename?: "Agent";
  id: Scalars["ID"];
  /** The name that this agent will be referred to by. */
  name: Scalars["String"];
  /** A 'profile image' for this agent. */
  image?: Maybe<Scalars["URI"]>;
  /** Optional email address contact for this agent. */
  email?: Maybe<Scalars["String"]>;
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: Maybe<SpatialThing>;
  note?: Maybe<Scalars["String"]>;
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>;
  economicEvents?: Maybe<Array<EconomicEvent>>;
  processes?: Maybe<Array<Process>>;
  commitments?: Maybe<Array<Commitment>>;
  intents?: Maybe<Array<Intent>>;
  plans?: Maybe<Array<Plan>>;
  relationships?: Maybe<Array<AgentRelationship>>;
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>;
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>;
  roles?: Maybe<Array<AgentRelationshipRole>>;
  recipes?: Maybe<Array<ResourceSpecification>>;
};

/** A person or group or organization with economic agency. */
export type AgentInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>;
};

/** A person or group or organization with economic agency. */
export type AgentEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>;
};

/** A person or group or organization with economic agency. */
export type AgentProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>;
};

/** A person or group or organization with economic agency. */
export type AgentCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>;
};

/** A person or group or organization with economic agency. */
export type AgentIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>;
};

/** A person or group or organization with economic agency. */
export type AgentPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>;
};

/** A person or group or organization with economic agency. */
export type AgentRelationshipsArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** Query parameters for reading `Commitment`s related to an `Agent` */
export type AgentCommitmentSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  action?: Maybe<Scalars["ID"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
};

export type AgentCreateParams = {
  primaryPhone?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  image?: Maybe<Scalars["URI"]>;
  email?: Maybe<Scalars["String"]>;
  primaryLocation?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Query parameters for reading `EconomicEvent`s related to an `Agent` */
export type AgentEventSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  action?: Maybe<Scalars["ID"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
};

export type AgentIntentSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  action?: Maybe<Scalars["ID"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
};

/** Query parameters for reading `Plan`s related to an `Agent` */
export type AgentPlanSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  finished?: Maybe<Scalars["Boolean"]>;
};

/** Query parameters for reading `Process`es related to an `Agent` */
export type AgentProcessSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  finished?: Maybe<Scalars["Boolean"]>;
};

/** An ongoing voluntary association between 2 agents of any kind. */
export type AgentRelationship = {
  __typename?: "AgentRelationship";
  id: Scalars["ID"];
  subject: Agent;
  object: Agent;
  relationship: AgentRelationshipRole;
  note?: Maybe<Scalars["String"]>;
};

export type AgentRelationshipCreateParams = {
  subject: Scalars["ID"];
  object: Scalars["ID"];
  relationship: Scalars["ID"];
  note?: Maybe<Scalars["String"]>;
};

export type AgentRelationshipResponse = {
  __typename?: "AgentRelationshipResponse";
  agentRelationship: AgentRelationship;
};

/** A relationship role defining the kind of association one agent can have with another. */
export type AgentRelationshipRole = {
  __typename?: "AgentRelationshipRole";
  id: Scalars["ID"];
  label: Scalars["String"];
  inverseLabel?: Maybe<Scalars["String"]>;
};

export type AgentRelationshipRoleCreateParams = {
  label: Scalars["String"];
  inverseLabel?: Maybe<Scalars["String"]>;
};

export type AgentRelationshipRoleResponse = {
  __typename?: "AgentRelationshipRoleResponse";
  agentRelationshipRole?: Maybe<AgentRelationshipRole>;
};

export type AgentRelationshipRoleUpdateParams = {
  id: Scalars["ID"];
  label?: Maybe<Scalars["String"]>;
  inverseLabel?: Maybe<Scalars["String"]>;
};

export type AgentRelationshipUpdateParams = {
  id: Scalars["ID"];
  subject?: Maybe<Scalars["ID"]>;
  object?: Maybe<Scalars["ID"]>;
  relationship?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Query parameters for reading `EconomicResource`s related to an `Agent` */
export type AgentResourceSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  resourceClassification?: Maybe<Scalars["URI"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type AgentUpdateParams = {
  id: Scalars["ID"];
  primaryPhone?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["URI"]>;
  email?: Maybe<Scalars["String"]>;
  primaryLocation?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Any type of agreement among economic agents. */
export type Agreement = {
  __typename?: "Agreement";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
  commitments?: Maybe<Array<Commitment>>;
  economicEvents?: Maybe<Array<EconomicEvent>>;
  involvedAgents?: Maybe<Array<Agent>>;
};

export type AgreementCreateParams = {
  name: Scalars["String"];
  created: Scalars["DateTime"];
  note?: Maybe<Scalars["String"]>;
};

export type AgreementResponse = {
  __typename?: "AgreementResponse";
  Agreement?: Maybe<Agreement>;
};

export type AgreementUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

/** References either an agreement formally managed by `Commitment`s & `EconomicEvent`s,
 * or an external agreement which is loosely held to govern resource flows.
 */
export type AnyAgreement = Agreement | ReferencedAgreement;

/** A way to tie an economic event that is given in loose fulfilment for another
 * economic event, without commitments or expectations. Supports the gift economy.
 */
export type Appreciation = {
  __typename?: "Appreciation";
  id: Scalars["ID"];
  /** The `EconomicEvent` this appreciation has been given in acknowledgement of */
  appreciationOf?: Maybe<EconomicEvent>;
  /** The `EconomicEvent` provided as a gift in this appreciation */
  appreciationWith?: Maybe<EconomicEvent>;
  note?: Maybe<Scalars["String"]>;
};

export type AppreciationCreateParams = {
  appreciationOf?: Maybe<Scalars["ID"]>;
  appreciationWith?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

export type AppreciationResponse = {
  __typename?: "AppreciationResponse";
  appreciation?: Maybe<Appreciation>;
};

export type AppreciationUpdateParams = {
  id: Scalars["ID"];
  appreciationOf?: Maybe<Scalars["ID"]>;
  appreciationWith?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

/** A claim for a future economic event(s) in reciprocity for an economic event that already occurred. */
export type Claim = {
  __typename?: "Claim";
  id: Scalars["ID"];
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider: Agent;
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver: Agent;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** The amount of the claimed resource desired by the claim. */
  claimedQuantity?: Maybe<QuantityValue>;
  /** The economic event which already occurred which this claim has been made against. */
  triggeredBy: EconomicEvent;
  /** Indicates that the claim must be filled before the given date. */
  before?: Maybe<Scalars["DateTime"]>;
  /** The data on which the claim was made. */
  created?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  note?: Maybe<Scalars["String"]>;
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: Maybe<AnyAgreement>;
};

export type ClaimCreateParams = {
  action?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  claimedQuantity?: Maybe<IQuantityValue>;
  triggeredBy?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
  underAgreement?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
};

export type ClaimResponse = {
  __typename?: "ClaimResponse";
  claim?: Maybe<Claim>;
};

export type ClaimUpdateParams = {
  id: Scalars["ID"];
  action?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  claimedQuantity?: Maybe<IQuantityValue>;
  triggeredBy?: Maybe<Scalars["ID"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  note?: Maybe<Scalars["String"]>;
  underAgreement?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
};

/** A planned economic flow that has been promised by an agent to another agent. */
export type Commitment = {
  __typename?: "Commitment";
  id: Scalars["ID"];
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** A `Process` or `Transfer` which this `Commitment` will aid in the finalisation of. */
  inputOf?: Maybe<EconomicActivity>;
  /** A `Process` or `Transfer` which this `Commitment` has been generated as a result of. */
  outputOf?: Maybe<EconomicActivity>;
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider?: Maybe<Agent>;
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver?: Maybe<Agent>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** Economic resource involved in the flow. */
  resourceInventoriedAs?: Maybe<EconomicResource>;
  flowQuantity?: Maybe<QuantityValue>;
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact end of flow or process */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred prior to this specific time */
  before?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred after this specific time */
  after?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  /** The place where a commitment occurs.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: Maybe<AnyAgreement>;
  /** This commitment is part of the agreement, which could not exist without it. */
  clauseOf?: Maybe<Agreement>;
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: Maybe<Array<Fulfillment>>;
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>;
  involvedAgents?: Maybe<Array<Agent>>;
  plan?: Maybe<Plan>;
};

export type CommitmentCreateParams = {
  action: Scalars["ID"];
  inputOf?: Maybe<Scalars["ID"]>;
  outputOf?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  resourceInventoriedAs?: Maybe<Scalars["ID"]>;
  flowQuantity: IQuantityValue;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  independentDemandOf?: Maybe<Scalars["ID"]>;
  atLocation?: Maybe<Scalars["ID"]>;
  underAgreement?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
  clauseOf?: Maybe<Scalars["ID"]>;
};

export type CommitmentResponse = {
  __typename?: "CommitmentResponse";
  commitment?: Maybe<Commitment>;
};

export type CommitmentUpdateParams = {
  id: Scalars["ID"];
  inputOf?: Maybe<Scalars["ID"]>;
  outputOf?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  resourceInventoriedAs?: Maybe<Scalars["ID"]>;
  flowQuantity: IQuantityValue;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  independentDemandOf?: Maybe<Scalars["ID"]>;
  atLocation?: Maybe<Scalars["ID"]>;
  underAgreement?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
  clauseOf?: Maybe<Scalars["ID"]>;
};

/** A `Duration` represents an interval between two `DateTime` values. */
export type Duration = {
  __typename?: "Duration";
  numericDuration: Scalars["Float"];
  unitType: TimeUnit;
};

export type EconomicActivity = Process | Transfer;

/** An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 */
export type EconomicEvent = {
  __typename?: "EconomicEvent";
  id: Scalars["ID"];
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** Defines the activity to which this event is an input */
  inputOf?: Maybe<EconomicActivity>;
  /** Defines the activity for which this event is an output */
  outputOf?: Maybe<EconomicActivity>;
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider?: Maybe<Agent>;
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver?: Maybe<Agent>;
  /** Economic resource involved in the flow. */
  resourceInventoriedAs?: Maybe<EconomicResource>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** The amount and unit of the event. This is the quantity that could be used to
   * increment or decrement a resource, depending on the type of resource and type of event.
   */
  flowQuantity?: Maybe<QuantityValue>;
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact end of flow or process */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred prior to this specific time */
  before?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred after this specific time */
  after?: Maybe<Scalars["DateTime"]>;
  /** The place where an economic event occurs.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: Maybe<AnyAgreement>;
  /** This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Agreement>;
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: Maybe<Array<Fulfillment>>;
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>;
  track?: Maybe<Array<ProductionFlowItem>>;
  trace?: Maybe<Array<ProductionFlowItem>>;
};

export type EconomicEventCreateParams = {
  action: Scalars["ID"];
  inputOf?: Maybe<Scalars["ID"]>;
  outputOf?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  resourceInventoriedAs?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  flowQuantity?: Maybe<IQuantityValue>;
  atLocation?: Maybe<Scalars["ID"]>;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

export type EconomicEventResponse = {
  __typename?: "EconomicEventResponse";
  economicEvent: EconomicEvent;
  economicResource?: Maybe<EconomicResource>;
};

export type EconomicEventUpdateParams = {
  id: Scalars["ID"];
  action?: Maybe<Scalars["ID"]>;
  inputOf?: Maybe<Scalars["ID"]>;
  outputOf?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  resourceInventoriedAs?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  flowQuantity?: Maybe<IQuantityValue>;
  atLocation?: Maybe<Scalars["ID"]>;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

/** A resource which is useful to people or the ecosystem. */
export type EconomicResource = {
  __typename?: "EconomicResource";
  id: Scalars["ID"];
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** Sometimes called lot number, used for trackable batched resources. Sometimes
   * called serial number, used when each item must have a trackable identifier
   * (like a computer). Could also be used for other unique tracking identifiers
   * needed for resources.
   */
  trackingIdentifier?: Maybe<Scalars["String"]>;
  /** URI to a descriptive picture of this item. */
  image?: Maybe<Scalars["URI"]>;
  /** The current amount and unit of the economic resource. This can be stored or
   * derived from economic events affecting the resource.
   */
  currentQuantity?: Maybe<QuantityValue>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** A more concrete resource upon which a resource is based. */
  underlyingResource?: Maybe<EconomicResource>;
  /** Used when a stock economic resource contains units also defined as economic resources. */
  contains?: Maybe<Array<EconomicResource>>;
  /** The current place an economic resource is located. Could be at any level of
   * granularity, from a town to an address to a warehouse location. Usually mappable.
   */
  currentLocation?: Maybe<SpatialThing>;
  trace?: Maybe<Array<EconomicEvent>>;
  track?: Maybe<Array<EconomicEvent>>;
};

/** Input `EconomicResource` type used when sending events to setup initial resource recordings */
export type EconomicResourceCreateParams = {
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  trackingIdentifier?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["URI"]>;
  currentQuantity?: Maybe<IQuantityValue>;
  currentLocation?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

export type EconomicResourceResponse = {
  __typename?: "EconomicResourceResponse";
  economicResource: EconomicResource;
};

export type EconomicResourceUpdateParams = {
  id: Scalars["ID"];
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  trackingIdentifier?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["URI"]>;
  currentQuantity?: Maybe<IQuantityValue>;
  currentLocation?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
};

export type EventOrCommitment = EconomicEvent | Commitment;

/** The quantity that the economic event fulfilled towards the commitment. */
export type Fulfillment = {
  __typename?: "Fulfillment";
  id: Scalars["ID"];
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: EconomicEvent;
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Commitment;
  /** The quantity of the fulfillment of an event towards a commitment or an intent. */
  fulfilledQuantity?: Maybe<QuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

export type FulfillmentCreateParams = {
  fulfilledBy: Scalars["ID"];
  fulfills: Scalars["ID"];
  fulfilledQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

export type FulfillmentResponse = {
  __typename?: "FulfillmentResponse";
  fulfillment?: Maybe<Fulfillment>;
};

export type FulfillmentUpdateParams = {
  id: Scalars["ID"];
  fulfilledBy?: Maybe<Scalars["ID"]>;
  fulfills?: Maybe<Scalars["ID"]>;
  fulfilledQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

/** Mutation input structure for defining time durations. */
export type IDuration = {
  numericDuration: Scalars["Float"];
  unitType: TimeUnit;
};

/** A planned economic flow, which can lead to economic events (sometimes through commitments). */
export type Intent = {
  __typename?: "Intent";
  id: Scalars["ID"];
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** A `Process` or `Transfer` to which this `Intent` is hoping to contribute towards. */
  inputOf?: Maybe<EconomicActivity>;
  /** A `Process` or `Transfer` which this `Intent` will eventuate as a result of. */
  outputOf?: Maybe<EconomicActivity>;
  /** The economic agent from whom the intended, committed, or actual economic event is initiated. */
  provider?: Maybe<Agent>;
  /** The economic agent whom the intended, committed, or actual economic event is for. */
  receiver?: Maybe<Agent>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** When a specific `EconomicResource` is known which can service the `Intent`, this defines that resource. */
  resourceInventoriedAs?: Maybe<EconomicResource>;
  flowQuantity?: Maybe<QuantityValue>;
  /** The base quantity of the offer or request, which can be multipied for an
   * actual commitment.  Used for example for a price list.
   */
  exchangeRateQuantity?: Maybe<QuantityValue>;
  /** The total quantity of the offered or requested resource available. */
  availableQuantity?: Maybe<QuantityValue>;
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact end of flow or process */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred prior to this specific time */
  before?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred after this specific time */
  after?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  /** The place where an intent would occur.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>;
  image?: Maybe<Scalars["URI"]>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this flow. */
  under?: Maybe<AnyAgreement>;
  satisfiedBy?: Maybe<Array<Satisfaction>>;
  publishedIn?: Maybe<Array<ProposedIntent>>;
};

export type IntentCreateParams = {
  action: Scalars["ID"];
  inputOf?: Maybe<Scalars["ID"]>;
  outputOf?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  flowQuantity?: Maybe<IQuantityValue>;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Scalars["URI"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  atLocation?: Maybe<Scalars["ID"]>;
  underAgreement?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
};

export type IntentResponse = {
  __typename?: "IntentResponse";
  intent: Intent;
};

export type IntentUpdateParams = {
  id: Scalars["ID"];
  action?: Maybe<Scalars["ID"]>;
  inputOf?: Maybe<Scalars["ID"]>;
  outputOf?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  flowQuantity?: Maybe<IQuantityValue>;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Scalars["URI"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  atLocation?: Maybe<Scalars["ID"]>;
  underAgreement?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
};

/** Mutation input structure for defining measurements. Should be nulled if not present, rather than empty. */
export type IQuantityValue = {
  numericValue: Scalars["Float"];
  unit: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPerson?: Maybe<PersonResponse>;
  updatePerson?: Maybe<PersonResponse>;
  deletePerson?: Maybe<PersonResponse>;
  createOrganization?: Maybe<OrganizationResponse>;
  updateOrganization?: Maybe<OrganizationResponse>;
  deleteOrganization?: Maybe<OrganizationResponse>;
  createAgentRelationship?: Maybe<AgentRelationshipResponse>;
  updateAgentRelationship?: Maybe<AgentRelationshipResponse>;
  deleteAgentRelationship?: Maybe<AgentRelationshipResponse>;
  createAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>;
  updateAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>;
  deleteAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>;
  createEconomicEvent?: Maybe<EconomicEventResponse>;
  updateEconomicEvent?: Maybe<EconomicEventResponse>;
  deleteEconomicEvent?: Maybe<EconomicEventResponse>;
  updateEconomicResource?: Maybe<EconomicResourceResponse>;
  deleteEconomicResource?: Maybe<EconomicResourceResponse>;
  createProcess?: Maybe<ProcessResponse>;
  updateProcess?: Maybe<ProcessResponse>;
  deleteProcess?: Maybe<ProcessResponse>;
  createTransfer?: Maybe<TransferResponse>;
  updateTransfer?: Maybe<TransferResponse>;
  deleteTransfer?: Maybe<TransferResponse>;
  createAppreciation?: Maybe<AppreciationResponse>;
  updateAppreciation?: Maybe<AppreciationResponse>;
  deleteAppreciation?: Maybe<AppreciationResponse>;
  createCommitment?: Maybe<CommitmentResponse>;
  updateCommitment?: Maybe<CommitmentResponse>;
  deleteCommitment?: Maybe<CommitmentResponse>;
  createIntent?: Maybe<IntentResponse>;
  updateIntent?: Maybe<IntentResponse>;
  deleteIntent?: Maybe<IntentResponse>;
  createFulfillment?: Maybe<FulfillmentResponse>;
  updateFulfillment?: Maybe<FulfillmentResponse>;
  deleteFulfillment?: Maybe<FulfillmentResponse>;
  createSatisfaction?: Maybe<SatisfactionResponse>;
  updateSatisfaction?: Maybe<SatisfactionResponse>;
  deleteSatisfaction?: Maybe<SatisfactionResponse>;
  createPlan?: Maybe<PlanResponse>;
  updatePlan?: Maybe<PlanResponse>;
  deletePlan?: Maybe<PlanResponse>;
  createAgreement?: Maybe<AgreementResponse>;
  updateAgreement?: Maybe<AgreementResponse>;
  deleteAgreement?: Maybe<AgreementResponse>;
  createClaim?: Maybe<ClaimResponse>;
  updateClaim?: Maybe<ClaimResponse>;
  deleteClaim?: Maybe<ClaimResponse>;
  createSettlement?: Maybe<SettlementResponse>;
  updateSettlement?: Maybe<SettlementResponse>;
  deleteSettlement?: Maybe<SettlementResponse>;
  createResourceSpecification?: Maybe<ResourceSpecificationResponse>;
  updateResourceSpecification?: Maybe<ResourceSpecificationResponse>;
  deleteResourceSpecification?: Maybe<ResourceSpecificationResponse>;
  createRecipeFlow?: Maybe<RecipeFlowResponse>;
  updateRecipeFlow?: Maybe<RecipeFlowResponse>;
  deleteRecipeFlow?: Maybe<RecipeFlowResponse>;
  createRecipeProcess?: Maybe<RecipeProcessResponse>;
  updateRecipeProcess?: Maybe<RecipeProcessResponse>;
  deleteRecipeProcess?: Maybe<RecipeProcessResponse>;
};

export type MutationCreatePersonArgs = {
  person: AgentCreateParams;
};

export type MutationUpdatePersonArgs = {
  person: AgentUpdateParams;
};

export type MutationDeletePersonArgs = {
  id: Scalars["String"];
};

export type MutationCreateOrganizationArgs = {
  organization: AgentCreateParams;
};

export type MutationUpdateOrganizationArgs = {
  organization: AgentUpdateParams;
};

export type MutationDeleteOrganizationArgs = {
  id: Scalars["String"];
};

export type MutationCreateAgentRelationshipArgs = {
  relationship: AgentRelationshipCreateParams;
};

export type MutationUpdateAgentRelationshipArgs = {
  relationship: AgentRelationshipUpdateParams;
};

export type MutationDeleteAgentRelationshipArgs = {
  id: Scalars["String"];
};

export type MutationCreateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleCreateParams>;
};

export type MutationUpdateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleUpdateParams>;
};

export type MutationDeleteAgentRelationshipRoleArgs = {
  id: Scalars["String"];
};

export type MutationCreateEconomicEventArgs = {
  event: EconomicEventCreateParams;
  createResource?: Maybe<EconomicResourceCreateParams>;
};

export type MutationUpdateEconomicEventArgs = {
  event: EconomicEventUpdateParams;
};

export type MutationDeleteEconomicEventArgs = {
  id: Scalars["String"];
};

export type MutationUpdateEconomicResourceArgs = {
  resource: EconomicResourceUpdateParams;
};

export type MutationDeleteEconomicResourceArgs = {
  id: Scalars["String"];
};

export type MutationCreateProcessArgs = {
  process: ProcessCreateParams;
};

export type MutationUpdateProcessArgs = {
  process: ProcessUpdateParams;
};

export type MutationDeleteProcessArgs = {
  id: Scalars["String"];
};

export type MutationCreateTransferArgs = {
  transfer: TransferCreateParams;
};

export type MutationUpdateTransferArgs = {
  transfer: TransferUpdateParams;
};

export type MutationDeleteTransferArgs = {
  id: Scalars["String"];
};

export type MutationCreateAppreciationArgs = {
  appreciation: AppreciationCreateParams;
};

export type MutationUpdateAppreciationArgs = {
  appreciation: AppreciationUpdateParams;
};

export type MutationDeleteAppreciationArgs = {
  id: Scalars["String"];
};

export type MutationCreateCommitmentArgs = {
  commitment?: Maybe<CommitmentCreateParams>;
};

export type MutationUpdateCommitmentArgs = {
  commitment?: Maybe<CommitmentUpdateParams>;
};

export type MutationDeleteCommitmentArgs = {
  id: Scalars["String"];
};

export type MutationCreateIntentArgs = {
  intent?: Maybe<IntentCreateParams>;
};

export type MutationUpdateIntentArgs = {
  intent?: Maybe<IntentUpdateParams>;
};

export type MutationDeleteIntentArgs = {
  id: Scalars["String"];
};

export type MutationCreateFulfillmentArgs = {
  fulfillment: FulfillmentCreateParams;
};

export type MutationUpdateFulfillmentArgs = {
  fulfillment: FulfillmentUpdateParams;
};

export type MutationDeleteFulfillmentArgs = {
  id: Scalars["String"];
};

export type MutationCreateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionCreateParams>;
};

export type MutationUpdateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionUpdateParams>;
};

export type MutationDeleteSatisfactionArgs = {
  id: Scalars["String"];
};

export type MutationCreatePlanArgs = {
  plan: PlanCreateParams;
};

export type MutationUpdatePlanArgs = {
  plan: PlanUpdateParams;
};

export type MutationDeletePlanArgs = {
  id: Scalars["String"];
};

export type MutationCreateAgreementArgs = {
  agreement?: Maybe<AgreementCreateParams>;
};

export type MutationUpdateAgreementArgs = {
  agreement?: Maybe<AgreementUpdateParams>;
};

export type MutationDeleteAgreementArgs = {
  id: Scalars["String"];
};

export type MutationCreateClaimArgs = {
  claim: ClaimCreateParams;
};

export type MutationUpdateClaimArgs = {
  claim: ClaimUpdateParams;
};

export type MutationDeleteClaimArgs = {
  id: Scalars["String"];
};

export type MutationCreateSettlementArgs = {
  settlement: SettlementCreateParams;
};

export type MutationUpdateSettlementArgs = {
  s0ettlement: SettlementUpdateParams;
};

export type MutationDeleteSettlementArgs = {
  id: Scalars["String"];
};

export type MutationCreateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationCreateParams>;
};

export type MutationUpdateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationUpdateParams>;
};

export type MutationDeleteResourceSpecificationArgs = {
  id: Scalars["String"];
};

export type MutationCreateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowCreateParams>;
};

export type MutationUpdateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowUpdateParams>;
};

export type MutationDeleteRecipeFlowArgs = {
  id: Scalars["String"];
};

export type MutationCreateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessCreateParams>;
};

export type MutationUpdateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessUpdateParams>;
};

export type MutationDeleteRecipeProcessArgs = {
  id: Scalars["String"];
};

/** A formal or informal group, or legal organization. */
export type Organization = Agent & {
  __typename?: "Organization";
  id: Scalars["ID"];
  /** The name that this agent will be referred to by. */
  name: Scalars["String"];
  /** A 'profile image' for this agent. */
  image?: Maybe<Scalars["URI"]>;
  /** Optional email address contact for this agent. */
  email?: Maybe<Scalars["String"]>;
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: Maybe<SpatialThing>;
  note?: Maybe<Scalars["String"]>;
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>;
  economicEvents?: Maybe<Array<EconomicEvent>>;
  processes?: Maybe<Array<Process>>;
  commitments?: Maybe<Array<Commitment>>;
  intents?: Maybe<Array<Intent>>;
  plans?: Maybe<Array<Plan>>;
  relationships?: Maybe<Array<AgentRelationship>>;
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>;
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>;
  roles?: Maybe<Array<AgentRelationshipRole>>;
  recipes?: Maybe<Array<ResourceSpecification>>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

export type OrganizationResponse = {
  __typename?: "OrganizationResponse";
  agent: Organization;
};

/** A natural person. */
export type Person = Agent & {
  __typename?: "Person";
  id: Scalars["ID"];
  /** The name that this agent will be referred to by. */
  name: Scalars["String"];
  /** A 'profile image' for this agent. */
  image?: Maybe<Scalars["URI"]>;
  /** Optional email address contact for this agent. */
  email?: Maybe<Scalars["String"]>;
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: Maybe<SpatialThing>;
  note?: Maybe<Scalars["String"]>;
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>;
  economicEvents?: Maybe<Array<EconomicEvent>>;
  processes?: Maybe<Array<Process>>;
  commitments?: Maybe<Array<Commitment>>;
  intents?: Maybe<Array<Intent>>;
  plans?: Maybe<Array<Plan>>;
  relationships?: Maybe<Array<AgentRelationship>>;
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>;
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>;
  roles?: Maybe<Array<AgentRelationshipRole>>;
  recipes?: Maybe<Array<ResourceSpecification>>;
};

/** A natural person. */
export type PersonInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>;
};

/** A natural person. */
export type PersonEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>;
};

/** A natural person. */
export type PersonProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>;
};

/** A natural person. */
export type PersonCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>;
};

/** A natural person. */
export type PersonIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>;
};

/** A natural person. */
export type PersonPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>;
};

/** A natural person. */
export type PersonRelationshipsArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** A natural person. */
export type PersonRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

/** A natural person. */
export type PersonRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars["ID"]>;
};

export type PersonResponse = {
  __typename?: "PersonResponse";
  agent: Person;
};

export type Plan = {
  __typename?: "Plan";
  id: Scalars["ID"];
  plannedOn?: Maybe<Scalars["String"]>;
  due?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  processes?: Maybe<Array<Process>>;
  workingAgents?: Maybe<Array<Agent>>;
  plannedNonWorkInputs?: Maybe<Array<Commitment>>;
  plannedOutputs?: Maybe<Array<Commitment>>;
  nonWorkInputs?: Maybe<Array<EconomicEvent>>;
  outputs?: Maybe<Array<EconomicEvent>>;
  kanbanState?: Maybe<Scalars["String"]>;
};

export type PlanProcessesArgs = {
  filter?: Maybe<PlanProcessSearchParams>;
};

export type PlanCreateParams = {
  id: Scalars["ID"];
  name: Scalars["String"];
  created?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Query parameters for reading `Process`es related to a `Plan` */
export type PlanProcessSearchParams = {
  searchString?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
};

export type PlanResponse = {
  __typename?: "PlanResponse";
  plan?: Maybe<Plan>;
};

export type PlanUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type Process = {
  __typename?: "Process";
  id: Scalars["ID"];
  name: Scalars["String"];
  /** Specific time marking the exact beginning of flow or process */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact end of flow or process */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred prior to this specific time */
  before?: Maybe<Scalars["DateTime"]>;
  /** Indicates the flow or process occurred after this specific time */
  after?: Maybe<Scalars["DateTime"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  /** The recipe definition or specification for a process. */
  basedOn?: Maybe<RecipeProcess>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Plan>;
  inputs?: Maybe<Array<EconomicEvent>>;
  outputs?: Maybe<Array<EconomicEvent>>;
  unplannedEconomicEvents?: Maybe<Array<EconomicEvent>>;
  committedInputs?: Maybe<Array<Commitment>>;
  committedOutputs?: Maybe<Array<Commitment>>;
  intendedInputs?: Maybe<Array<Intent>>;
  intendedOutputs?: Maybe<Array<Intent>>;
  nextProcesses?: Maybe<Array<Process>>;
  previousProcesses?: Maybe<Array<Process>>;
  workingAgents?: Maybe<Array<Agent>>;
  trace?: Maybe<Array<EconomicEvent>>;
  track?: Maybe<Array<EconomicEvent>>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessInputsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessOutputsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessUnplannedEconomicEventsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedInputsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedOutputsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedInputsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedOutputsArgs = {
  action?: Maybe<Scalars["ID"]>;
};

export type ProcessCreateParams = {
  name: Scalars["String"];
  hasDuration?: Maybe<IDuration>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  plannedWithin?: Maybe<Scalars["ID"]>;
};

export type ProcessResponse = {
  __typename?: "ProcessResponse";
  process?: Maybe<Process>;
};

export type ProcessUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  hasDuration?: Maybe<IDuration>;
  finished?: Maybe<Scalars["Boolean"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  plannedWithin?: Maybe<Scalars["ID"]>;
};

export type ProductionFlowItem = Process | Transfer | EconomicResource;

/** Published requests or offers, sometimes with what is expected in return. */
export type Proposal = {
  __typename?: "Proposal";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  /** Specific time marking the exact beginning of proposal publication. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** Specific time marking the exact end of proposal publication. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  eligibleLocation?: Maybe<SpatialThing>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  created?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
  publishes?: Maybe<Array<ProposedIntent>>;
};

/** Supports including intents in multiple proposals, as well as a proposal including multiple intents. */
export type ProposedIntent = {
  __typename?: "ProposedIntent";
  id: Scalars["ID"];
  /** This is a reciprocal intent of this proposal, not primary. Not meant to be part of intent matching. */
  reciprocal?: Maybe<Scalars["Boolean"]>;
  /** The intent which is part of this published proposal. */
  publishes: Intent;
  /** The published proposal which this intent is part of. */
  publishedIn: Proposal;
};

/** Semantic meaning for measurements: binds a quantity to its measurement unit.
 * See http://www.qudt.org/pages/QUDToverviewPage.html
 */
export type QuantityValue = {
  __typename?: "QuantityValue";
  numericValue: Scalars["Float"];
  unit?: Maybe<Unit>;
};

export type Query = {
  __typename?: "Query";
  myAgent?: Maybe<Agent>;
  agent?: Maybe<Agent>;
  allAgents?: Maybe<Array<Agent>>;
  organization?: Maybe<Organization>;
  allOrganizations?: Maybe<Array<Organization>>;
  person?: Maybe<Person>;
  allPeople?: Maybe<Array<Person>>;
  agentRelationship?: Maybe<AgentRelationship>;
  allAgentRelationships?: Maybe<Array<AgentRelationship>>;
  agentRelationshipRole?: Maybe<AgentRelationshipRole>;
  allAgentRelationshipRoles?: Maybe<Array<AgentRelationshipRole>>;
  economicEvent?: Maybe<EconomicEvent>;
  allEconomicEvents?: Maybe<Array<EconomicEvent>>;
  filteredEconomicEvents?: Maybe<Array<EconomicEvent>>;
  fulfillment?: Maybe<Fulfillment>;
  allFulfillments?: Maybe<Array<Fulfillment>>;
  economicResource?: Maybe<EconomicResource>;
  allEconomicResources?: Maybe<Array<EconomicResource>>;
  process?: Maybe<Process>;
  allProcesses?: Maybe<Array<Process>>;
  transfer?: Maybe<Transfer>;
  allTransfers?: Maybe<Array<Transfer>>;
  commitment?: Maybe<Commitment>;
  allCommitments?: Maybe<Array<Commitment>>;
  satisfaction?: Maybe<Satisfaction>;
  allSatisfactions?: Maybe<Array<Satisfaction>>;
  plan?: Maybe<Plan>;
  allPlans?: Maybe<Array<Plan>>;
  agreement?: Maybe<Agreement>;
  allAgreements?: Maybe<Array<Agreement>>;
  resourceSpecification?: Maybe<ResourceSpecification>;
  allResourceSpecifications?: Maybe<Array<ResourceSpecification>>;
  recipeProcess?: Maybe<RecipeProcess>;
  allRecipeProcesses?: Maybe<Array<RecipeProcess>>;
  recipeFlow?: Maybe<RecipeFlow>;
  allRecipeFlows?: Maybe<Array<RecipeFlow>>;
  action?: Maybe<Action>;
  allActions?: Maybe<Array<Action>>;
  unit?: Maybe<Unit>;
  allUnits?: Maybe<Array<Unit>>;
  quantityValue?: Maybe<QuantityValue>;
  spatialThing?: Maybe<SpatialThing>;
  allSpatialThings?: Maybe<Array<SpatialThing>>;
};

export type QueryAgentArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryOrganizationArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryPersonArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryAgentRelationshipArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryAgentRelationshipRoleArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryEconomicEventArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryFilteredEconomicEventsArgs = {
  providerId?: Maybe<Scalars["ID"]>;
  receiverId?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  action?: Maybe<Scalars["ID"]>;
  startDate?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["String"]>;
};

export type QueryFulfillmentArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryEconomicResourceArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryProcessArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryTransferArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryCommitmentArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QuerySatisfactionArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryPlanArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryAgreementArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryResourceSpecificationArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryRecipeProcessArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryRecipeFlowArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryActionArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryUnitArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryQuantityValueArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QuerySpatialThingArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/** The linkage between a recipe process, an action that structures a recipe, and a resource specification. */
export type RecipeFlow = {
  __typename?: "RecipeFlow";
  id: Scalars["ID"];
  flowQuantity?: Maybe<QuantityValue>;
  /** The primary resource knowledge specification or definition of an existing or potential resource. */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** Relates a process input or output to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** Relates an input flow to it's node in a recipe. */
  recipeInputOf?: Maybe<RecipeProcess>;
  /** Relates an output flow to it's node in a recipe. */
  recipeOutputOf?: Maybe<RecipeProcess>;
  note?: Maybe<Scalars["String"]>;
};

export type RecipeFlowCreateParams = {
  action: Scalars["ID"];
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  flowQuantity?: Maybe<IQuantityValue>;
  recipeInputOf?: Maybe<Scalars["ID"]>;
  recipeOutputOf?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

export type RecipeFlowResponse = {
  __typename?: "RecipeFlowResponse";
  recipeFlow?: Maybe<RecipeFlow>;
};

export type RecipeFlowUpdateParams = {
  id: Scalars["ID"];
  action?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  flowQuantity?: Maybe<IQuantityValue>;
  recipeInputOf?: Maybe<Scalars["ID"]>;
  recipeOutputOf?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Specifies the process part of a recipe for use in planning from recipe. */
export type RecipeProcess = {
  __typename?: "RecipeProcess";
  id: Scalars["ID"];
  name: Scalars["String"];
  hasDuration?: Maybe<Duration>;
  /** The multiplier for duration based on capacities for the recipe. */
  durationMultiplier?: Maybe<Scalars["Float"]>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Agent>;
};

export type RecipeProcessCreateParams = {
  name: Scalars["String"];
  hasDuration?: Maybe<IDuration>;
  durationMultiplier?: Maybe<Scalars["Float"]>;
  processClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
};

export type RecipeProcessResponse = {
  __typename?: "RecipeProcessResponse";
  recipeProcess?: Maybe<RecipeProcess>;
};

export type RecipeProcessUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  hasDuration?: Maybe<IDuration>;
  durationMultiplier?: Maybe<Scalars["Float"]>;
  processClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
};

/** A reference to some external agreement between agents which specifies the rules
 * or policies or calculations which govern a flow.
 */
export type ReferencedAgreement = {
  __typename?: "ReferencedAgreement";
  id: Scalars["URI"];
};

/** Specification of a kind of resource. Could define a material item, service, digital item, currency account, etc.
 * Used instead of a classification when more information is needed, particularly for recipes.
 */
export type ResourceSpecification = {
  __typename?: "ResourceSpecification";
  id: Scalars["ID"];
  name: Scalars["String"];
  /** The unit expected for this resource specification as a default. */
  unit?: Maybe<Unit>;
  /** Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
   */
  substitutable?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<Scalars["URI"]>;
  note?: Maybe<Scalars["String"]>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  conformingResources?: Maybe<Array<EconomicResource>>;
};

export type ResourceSpecificationCreateParams = {
  name: Scalars["String"];
  unit?: Maybe<Scalars["ID"]>;
  substitutable?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<Scalars["URI"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
};

export type ResourceSpecificationResponse = {
  __typename?: "ResourceSpecificationResponse";
  resourceSpecification?: Maybe<ResourceSpecification>;
};

export type ResourceSpecificationUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["ID"]>;
  substitutable?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<Scalars["URI"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
};

/** A commitment or economic event that partially or fully satisfies an intent. */
export type Satisfaction = {
  __typename?: "Satisfaction";
  id: Scalars["ID"];
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Intent;
  /** A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: EventOrCommitment;
  /** The quantity of the satisfaction of an commitment towards an intent. */
  satisfiedQuantity?: Maybe<QuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

export type SatisfactionCreateParams = {
  satisfies: Scalars["ID"];
  satisfiedBy: Scalars["ID"];
  satisfiedQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

export type SatisfactionResponse = {
  __typename?: "SatisfactionResponse";
  satisfaction?: Maybe<Satisfaction>;
};

export type SatisfactionUpdateParams = {
  id: Scalars["ID"];
  satisfies?: Maybe<Scalars["ID"]>;
  satisfiedBy?: Maybe<Scalars["ID"]>;
  satisfiedQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

/** The quantity that the economic event settled of the claim. */
export type Settlement = {
  __typename?: "Settlement";
  id: Scalars["ID"];
  /** A `Claim` which is fully or partially settled by an `EconomicEvent`. */
  settles: Claim;
  /** The `EconomicEvent` fully or partially settling a `Claim`. */
  settledBy: EconomicEvent;
  /** The quantity of the settlement of an `EconomicEvent` towards a `Claim`. */
  settledQuantity?: Maybe<QuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

export type SettlementCreateParams = {
  settles: Scalars["ID"];
  settledBy: Scalars["ID"];
  settledQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

export type SettlementResponse = {
  __typename?: "SettlementResponse";
  settlement?: Maybe<Settlement>;
};

export type SettlementUpdateParams = {
  id: Scalars["ID"];
  settles?: Maybe<Scalars["ID"]>;
  settledBy?: Maybe<Scalars["ID"]>;
  settledQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

/** A physical mappable location. */
export type SpatialThing = {
  __typename?: "SpatialThing";
  id: Scalars["ID"];
  name: Scalars["String"];
  mappableAddress?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  long?: Maybe<Scalars["Float"]>;
  alt?: Maybe<Scalars["Float"]>;
  note?: Maybe<Scalars["String"]>;
  economicResources?: Maybe<Array<EconomicResource>>;
  agents?: Maybe<Array<Agent>>;
  economicEvents?: Maybe<Array<EconomicEvent>>;
  commitments?: Maybe<Array<Commitment>>;
  intents?: Maybe<Array<Intent>>;
};

/** Defines the unit of time measured in a temporal `Duration`. */
export enum TimeUnit {
  Year = "year",
  Month = "month",
  Week = "week",
  Day = "day",
  Hour = "hour",
  Minute = "minute",
  Second = "second"
}

/** An activity that assigns the rights and responsibilities for an economic resource from one agent to another. */
export type Transfer = {
  __typename?: "Transfer";
  id: Scalars["ID"];
  name: Scalars["String"];
  /** Specific time marking the exact moment at which the flow or process occurred */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  economicEvents?: Maybe<Array<EconomicEvent>>;
  giveEconomicEvent?: Maybe<EconomicEvent>;
  takeEconomicEvent?: Maybe<EconomicEvent>;
  transferCommitments?: Maybe<Array<Commitment>>;
  giveCommitment?: Maybe<Commitment>;
  takeCommitment?: Maybe<Commitment>;
  involvedAgents?: Maybe<Array<Agent>>;
  trace?: Maybe<Array<EconomicEvent>>;
  track?: Maybe<Array<EconomicEvent>>;
};

export type TransferCreateParams = {
  name: Scalars["String"];
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

export type TransferResponse = {
  __typename?: "TransferResponse";
  Transfer?: Maybe<Transfer>;
};

export type TransferUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Defines a unit of measurement, along with its display symbol.
 * See http://qudt.org/1.1/vocab/unit
 */
export type Unit = {
  __typename?: "Unit";
  id: Scalars["ID"];
  name: Scalars["String"];
  symbol: Scalars["String"];
};
