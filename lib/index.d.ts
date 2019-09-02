export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `URI` type simply declares a reference to an external web URL, Holochain entry or other resource. */
  URI: string;
  /** The `DateTime` scalar type represents a DateTime value as specified by
   * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: Date;
  /** A type which allows any arbitrary value to be set */
  AnyType: any;
};

/** An action verb defining the kind of event, commitment, or intent.
 * It is recommended that the lowercase action verb should be used as the record ID
 * in order that references to `Action`s elsewhere in the system are easily readable.
 */
export type Action = {
  __typename?: "Action";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an object. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The effect of an economic event on a resource, increment, decrement, no
   * effect, or decrement resource and increment 'to' resource.
   */
  resourceEffect: Scalars["String"];
};

/** A person or group or organization with economic agency. */
export type Agent = {
  __typename?: "Agent";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars["URI"]>;
  /** Optional email address contact for this agent. */
  email?: Maybe<Scalars["String"]>;
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: Maybe<SpatialThing>;
  /** A textual description or comment. */
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

/** The role of an economic relationship that exists between 2 agents, such as member, trading partner. */
export type AgentRelationship = {
  __typename?: "AgentRelationship";
  id: Scalars["ID"];
  /** The subject of a relationship between 2 agents.  For example, if Mary is a member of a group, then Mary is the subject. */
  subject: Agent;
  /** The object of a relationship between 2 agents.  For example, if Mary is a member of a group, then the group is the object. */
  object: Agent;
  /** A kind of relationship that exists between 2 agents. */
  relationship: AgentRelationshipRole;
  /** A textual description or comment. */
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
  /** The human readable name of the role, from the subject to the object. */
  label: Scalars["String"];
  /** The human readable name of the role, from the object to the subject. */
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
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars["String"]>;
  /** The date and time the agreement was created. */
  created?: Maybe<Scalars["DateTime"]>;
  /** A textual description or comment. */
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
  appreciationOf: EconomicEvent;
  /** The `EconomicEvent` provided as a gift in this appreciation */
  appreciationWith: EconomicEvent;
  /** A textual description or comment. */
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

/** A claim for a future economic event(s) in reciprocity for an economic event that
 * already occurred. For example, a claim for payment for goods received.
 */
export type Claim = {
  __typename?: "Claim";
  id: Scalars["ID"];
  /** Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** The economic agent from whom the claim is initiated. */
  provider: Agent;
  /** The economic agent whom the claim is for. */
  receiver: Agent;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** The economic event which already occurred which this claim has been made against. */
  triggeredBy: EconomicEvent;
  /** Indicates that the claim must be filled before the given date. */
  before?: Maybe<Scalars["DateTime"]>;
  /** The data on which the claim was made. */
  created?: Maybe<Scalars["DateTime"]>;
  /** The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
   */
  finished?: Maybe<Scalars["Boolean"]>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<AnyAgreement>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
};

export type ClaimCreateParams = {
  action?: Maybe<Scalars["ID"]>;
  provider?: Maybe<Scalars["ID"]>;
  receiver?: Maybe<Scalars["ID"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  triggeredBy?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
  agreedIn?: Maybe<Scalars["ID"]>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  triggeredBy?: Maybe<Scalars["ID"]>;
  finished?: Maybe<Scalars["Boolean"]>;
  note?: Maybe<Scalars["String"]>;
  agreedIn?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
};

/** A planned economic flow that has been promised by an agent to another agent. */
export type Commitment = {
  __typename?: "Commitment";
  id: Scalars["ID"];
  /** Relates a commitment to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Process>;
  /** Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Process>;
  /** The economic agent from whom the commitment is initiated. */
  provider?: Maybe<Agent>;
  /** The economic agent whom the commitment is for. */
  receiver?: Maybe<Agent>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** Economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<EconomicResource>;
  /** References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
   */
  stage?: Maybe<ProcessSpecification>;
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: Maybe<Action>;
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** The due date/time of the commitment. */
  before?: Maybe<Scalars["DateTime"]>;
  /** The commitment can start after this date/time. */
  after?: Maybe<Scalars["DateTime"]>;
  /** The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
   */
  finished?: Maybe<Scalars["Boolean"]>;
  /** The place where a commitment occurs.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
   */
  agreedIn?: Maybe<AnyAgreement>;
  /** This commitment is part of the agreement. */
  clauseOf?: Maybe<Agreement>;
  /** Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Plan>;
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: Maybe<Array<Fulfillment>>;
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>;
  involvedAgents?: Maybe<Array<Agent>>;
  plan?: Maybe<Plan>;
  /** The commitment can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars["Boolean"]>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  independentDemandOf?: Maybe<Scalars["ID"]>;
  atLocation?: Maybe<Scalars["ID"]>;
  agreedIn?: Maybe<Scalars["ID"]>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  agreedIn?: Maybe<Scalars["ID"]>;
  underExternalAgreement?: Maybe<Scalars["URI"]>;
  clauseOf?: Maybe<Scalars["ID"]>;
};

/** A `Duration` represents an interval between two `DateTime` values. */
export type Duration = {
  __typename?: "Duration";
  numericDuration: Scalars["Float"];
  unitType: TimeUnit;
};

/** An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 */
export type EconomicEvent = {
  __typename?: "EconomicEvent";
  id: Scalars["ID"];
  /** Relates an economic event to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** Defines the process to which this event is an input. */
  inputOf?: Maybe<Process>;
  /** Defines the process for which this event is an output. */
  outputOf?: Maybe<Process>;
  /** The economic agent from whom the actual economic event is initiated. */
  provider?: Maybe<Agent>;
  /** The economic agent whom the actual economic event is for. */
  receiver?: Maybe<Agent>;
  /** Economic resource involved in the economic event. */
  resourceInventoriedAs?: Maybe<EconomicResource>;
  /** Additional economic resource on the economic event when needed by the
   * receiver. Used when a transfer or move, or sometimes other actions, requires
   * explicitly identifying an economic resource on the receiving side.
   */
  toResourceInventoriedAs?: Maybe<EconomicResource>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
   */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** The beginning of the economic event. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** The end of the economic event. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** The date/time at which the economic event occurred. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** The economic event occurred prior to this date/time. */
  before?: Maybe<Scalars["DateTime"]>;
  /** The economic event occurred after this date/time. */
  after?: Maybe<Scalars["DateTime"]>;
  /** The place where an economic event occurs.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
   */
  agreedIn?: Maybe<AnyAgreement>;
  /** This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Agreement>;
  /** References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<EconomicEvent>;
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: Maybe<Array<Fulfillment>>;
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>;
  appreciationOf?: Maybe<Array<EconomicEvent>>;
  appreciatedBy?: Maybe<Array<EconomicEvent>>;
  track?: Maybe<Array<ProductionFlowItem>>;
  trace?: Maybe<Array<ProductionFlowItem>>;
  /** The economic event can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars["Boolean"]>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  /** References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
   */
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  conformsTo: ResourceSpecification;
  /** Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
   */
  trackingIdentifier?: Maybe<Scalars["String"]>;
  /** Lot or batch of an economic resource, used to track forward or backwards to
   * all occurrences of resources of that lot. Note more than one resource can be
   * of the same lot.
   */
  lot?: Maybe<ProductBatch>;
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars["URI"]>;
  /** The current amount and unit of the economic resource for which the agent has
   * primary rights and responsibilities, sometimes thought of as ownership. This
   * can be either stored or derived from economic events affecting the resource.
   */
  accountingQuantity?: Maybe<QuantityValue>;
  /** The current amount and unit of the economic resource which is under direct
   * control of the agent.  It may be more or less than the accounting quantity.
   * This can be either stored or derived from economic events affecting the resource.
   */
  onhandQuantity?: Maybe<QuantityValue>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: Maybe<Unit>;
  /** References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
   */
  stage?: Maybe<ProcessSpecification>;
  /** The state of the desired economic resource (pass or fail), after coming out of
   * a test or review process. Can be derived from the last event if a pass or fail event.
   */
  state?: Maybe<Action>;
  /** Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<EconomicResource>;
  /** The current place an economic resource is located. Could be at any level of
   * granularity, from a town to an address to a warehouse location. Usually mappable.
   */
  currentLocation?: Maybe<SpatialThing>;
  /** Used when a stock economic resource contains units also defined as economic resources. */
  contains?: Maybe<Array<EconomicResource>>;
  trace?: Maybe<Array<EconomicEvent>>;
  track?: Maybe<Array<EconomicEvent>>;
};

/** Input `EconomicResource` type used when sending events to setup initial resource recordings */
export type EconomicResourceCreateParams = {
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  resourceConformsTo?: Maybe<Scalars["ID"]>;
  trackingIdentifier?: Maybe<Scalars["String"]>;
  image?: Maybe<Scalars["URI"]>;
  accountingQuantity?: Maybe<IQuantityValue>;
  onhandQuantity?: Maybe<IQuantityValue>;
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
  accountingQuantity?: Maybe<IQuantityValue>;
  onhandQuantity?: Maybe<IQuantityValue>;
  currentLocation?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
};

export type EventOrCommitment = EconomicEvent | Commitment;

/** Represents many-to-many relationships between commitments and economic events
 * that fully or partially satisfy one or more commitments.
 */
export type Fulfillment = {
  __typename?: "Fulfillment";
  id: Scalars["ID"];
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: EconomicEvent;
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Commitment;
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
};

export type FulfillmentCreateParams = {
  fulfilledBy: Scalars["ID"];
  fulfills: Scalars["ID"];
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  /** Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action: Action;
  /** A `Process` to which this `Intent` is hoping to contribute towards. */
  inputOf?: Maybe<Process>;
  /** A `Process` which this `Intent` will eventuate as a result of. */
  outputOf?: Maybe<Process>;
  /** The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Agent>;
  /** The economic agent whom the intent is for.  This implies that the intent is a request */
  receiver?: Maybe<Agent>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** When a specific `EconomicResource` is known which can service the `Intent`, this defines that resource. */
  resourceInventoriedAs?: Maybe<EconomicResource>;
  /** The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
   */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<QuantityValue>;
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  /** The due date/time of the intent. */
  before?: Maybe<Scalars["DateTime"]>;
  /** The intent can start after this date/time. */
  after?: Maybe<Scalars["DateTime"]>;
  /** The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
   */
  finished?: Maybe<Scalars["Boolean"]>;
  /** The place where an intent would occur.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<AnyAgreement>;
  satisfiedBy?: Maybe<Array<Satisfaction>>;
  publishedIn?: Maybe<Array<ProposedIntent>>;
  /** The intent can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars["Boolean"]>;
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
  unitQuantity?: Maybe<IQuantityValue>;
  availableQuantity?: Maybe<IQuantityValue>;
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  hasEnd?: Maybe<Scalars["DateTime"]>;
  hasPointInTime?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
  after?: Maybe<Scalars["DateTime"]>;
  image?: Maybe<Scalars["URI"]>;
  note?: Maybe<Scalars["String"]>;
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  atLocation?: Maybe<Scalars["ID"]>;
  agreedIn?: Maybe<Scalars["ID"]>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  availableQuantity?: Maybe<IQuantityValue>;
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
  agreedIn?: Maybe<Scalars["ID"]>;
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
  deletePerson?: Maybe<Scalars["Boolean"]>;
  createOrganization?: Maybe<OrganizationResponse>;
  updateOrganization?: Maybe<OrganizationResponse>;
  deleteOrganization?: Maybe<Scalars["Boolean"]>;
  createAgentRelationship?: Maybe<AgentRelationshipResponse>;
  updateAgentRelationship?: Maybe<AgentRelationshipResponse>;
  deleteAgentRelationship?: Maybe<Scalars["Boolean"]>;
  createAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>;
  updateAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>;
  deleteAgentRelationshipRole?: Maybe<Scalars["Boolean"]>;
  createEconomicEvent?: Maybe<EconomicEventResponse>;
  updateEconomicEvent?: Maybe<EconomicEventResponse>;
  deleteEconomicEvent?: Maybe<Scalars["Boolean"]>;
  updateEconomicResource?: Maybe<EconomicResourceResponse>;
  deleteEconomicResource?: Maybe<Scalars["Boolean"]>;
  createProcess?: Maybe<ProcessResponse>;
  updateProcess?: Maybe<ProcessResponse>;
  deleteProcess?: Maybe<Scalars["Boolean"]>;
  createAppreciation?: Maybe<AppreciationResponse>;
  updateAppreciation?: Maybe<AppreciationResponse>;
  deleteAppreciation?: Maybe<Scalars["Boolean"]>;
  createCommitment?: Maybe<CommitmentResponse>;
  updateCommitment?: Maybe<CommitmentResponse>;
  deleteCommitment?: Maybe<Scalars["Boolean"]>;
  createIntent?: Maybe<IntentResponse>;
  updateIntent?: Maybe<IntentResponse>;
  deleteIntent?: Maybe<Scalars["Boolean"]>;
  createFulfillment?: Maybe<FulfillmentResponse>;
  updateFulfillment?: Maybe<FulfillmentResponse>;
  deleteFulfillment?: Maybe<Scalars["Boolean"]>;
  createSatisfaction?: Maybe<SatisfactionResponse>;
  updateSatisfaction?: Maybe<SatisfactionResponse>;
  deleteSatisfaction?: Maybe<Scalars["Boolean"]>;
  createPlan?: Maybe<PlanResponse>;
  updatePlan?: Maybe<PlanResponse>;
  deletePlan?: Maybe<Scalars["Boolean"]>;
  createAgreement?: Maybe<AgreementResponse>;
  updateAgreement?: Maybe<AgreementResponse>;
  deleteAgreement?: Maybe<Scalars["Boolean"]>;
  createClaim?: Maybe<ClaimResponse>;
  updateClaim?: Maybe<ClaimResponse>;
  deleteClaim?: Maybe<Scalars["Boolean"]>;
  createSettlement?: Maybe<SettlementResponse>;
  updateSettlement?: Maybe<SettlementResponse>;
  deleteSettlement?: Maybe<Scalars["Boolean"]>;
  createResourceSpecification?: Maybe<ResourceSpecificationResponse>;
  updateResourceSpecification?: Maybe<ResourceSpecificationResponse>;
  deleteResourceSpecification?: Maybe<Scalars["Boolean"]>;
  createRecipeFlow?: Maybe<RecipeFlowResponse>;
  updateRecipeFlow?: Maybe<RecipeFlowResponse>;
  deleteRecipeFlow?: Maybe<Scalars["Boolean"]>;
  createRecipeProcess?: Maybe<RecipeProcessResponse>;
  updateRecipeProcess?: Maybe<RecipeProcessResponse>;
  deleteRecipeProcess?: Maybe<Scalars["Boolean"]>;
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
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars["URI"]>;
  /** Optional email address contact for this agent. */
  email?: Maybe<Scalars["String"]>;
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: Maybe<SpatialThing>;
  /** A textual description or comment. */
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
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars["URI"]>;
  /** Optional email address contact for this agent. */
  email?: Maybe<Scalars["String"]>;
  /** The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
   */
  primaryLocation?: Maybe<SpatialThing>;
  /** A textual description or comment. */
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

/** A logical collection of processes that constitute a body of planned work with defined deliverable(s).
 * NOTE: Not accepted in VF.  Other option is to be a high level process.
 */
export type Plan = {
  __typename?: "Plan";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars["String"]>;
  /** The date and time the plan was made. */
  created?: Maybe<Scalars["DateTime"]>;
  /** The due date and time of the plan. */
  before?: Maybe<Scalars["DateTime"]>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scenario>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  processes?: Maybe<Array<Process>>;
  independentDemands?: Maybe<Array<Commitment>>;
};

/** A logical collection of processes that constitute a body of planned work with defined deliverable(s).
 * NOTE: Not accepted in VF.  Other option is to be a high level process.
 */
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
  after?: Maybe<Scalars["DateTime"]>;
  before?: Maybe<Scalars["DateTime"]>;
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
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** The due date/time of the process. */
  before?: Maybe<Scalars["DateTime"]>;
  /** The process can start after this date/time. */
  after?: Maybe<Scalars["DateTime"]>;
  /** The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
   */
  finished?: Maybe<Scalars["Boolean"]>;
  /** The definition or specification for a process. */
  basedOn?: Maybe<ProcessSpecification>;
  /** References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
   */
  classifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** A textual description or comment. */
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
  /** The process can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars["Boolean"]>;
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

/** Specifies the kind of process. */
export type ProcessSpecification = {
  __typename?: "ProcessSpecification";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: Scalars["String"];
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
};

export type ProcessSpecificationCreateParams = {
  name: Scalars["String"];
  note?: Maybe<Scalars["String"]>;
};

export type ProcessSpecificationResponse = {
  __typename?: "ProcessSpecificationResponse";
  processSpecification?: Maybe<ProcessSpecification>;
};

export type ProcessSpecificationUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  note?: Maybe<Scalars["String"]>;
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

/** A lot or batch, defining a resource produced at the same time in the same way.
 * From DataFoodConsortium vocabulary https://datafoodconsortium.gitbook.io/dfc-standard-documentation/.
 */
export type ProductBatch = {
  __typename?: "ProductBatch";
  id: Scalars["ID"];
  /** The standard unique identifier of the batch. */
  batchNumber: Scalars["String"];
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars["DateTime"]>;
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars["DateTime"]>;
};

export type ProductionFlowItem = Process | EconomicResource;

/** Published requests or offers, sometimes with what is expected in return. */
export type Proposal = {
  __typename?: "Proposal";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars["String"]>;
  /** The beginning date/time of proposal publication. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** The end date/time of proposal publication. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** Location or area where the proposal is valid. */
  eligibleLocation?: Maybe<SpatialThing>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
   */
  unitBased?: Maybe<Scalars["Boolean"]>;
  /** The date and time the proposal was created. */
  created?: Maybe<Scalars["DateTime"]>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  publishes?: Maybe<Array<ProposedIntent>>;
};

/** Represents many-to-many relationships between Proposals and Intents, supporting
 * including intents in multiple proposals, as well as a proposal including
 * multiple intents.
 */
export type ProposedIntent = {
  __typename?: "ProposedIntent";
  id: Scalars["ID"];
  /** This is a reciprocal intent of this proposal, not primary. Not meant to be used for intent matching. */
  reciprocal?: Maybe<Scalars["Boolean"]>;
  /** The intent which is part of this published proposal. */
  publishes: Intent;
  /** The published proposal which this intent is part of. */
  publishedIn: Proposal;
};

/** An agent to which the proposal is to be published.  A proposal can be published to many agents. */
export type ProposedTo = {
  __typename?: "ProposedTo";
  id: Scalars["ID"];
  /** The agent to which the proposal is published. */
  proposedTo: Agent;
  /** The proposal that is published to a specific agent. */
  proposed: Proposal;
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
  commitment?: Maybe<Commitment>;
  allCommitments?: Maybe<Array<Commitment>>;
  intent?: Maybe<Intent>;
  allIntents?: Maybe<Array<Intent>>;
  satisfaction?: Maybe<Satisfaction>;
  allSatisfactions?: Maybe<Array<Satisfaction>>;
  plan?: Maybe<Plan>;
  allPlans?: Maybe<Array<Plan>>;
  agreement?: Maybe<Agreement>;
  allAgreements?: Maybe<Array<Agreement>>;
  resourceSpecification?: Maybe<ResourceSpecification>;
  allResourceSpecifications?: Maybe<Array<ResourceSpecification>>;
  recipeResource?: Maybe<RecipeResource>;
  allRecipeResources?: Maybe<Array<RecipeResource>>;
  processSpecification?: Maybe<ProcessSpecification>;
  allProcessSpecifications?: Maybe<Array<ProcessSpecification>>;
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

export type QueryCommitmentArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryIntentArgs = {
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

export type QueryRecipeResourceArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryProcessSpecificationArgs = {
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

/** The specification of a resource inflow to, or outflow from, a recipe process. */
export type RecipeFlow = {
  __typename?: "RecipeFlow";
  id: Scalars["ID"];
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** The resource definition referenced by this flow in the recipe. */
  recipeFlowResource?: Maybe<RecipeResource>;
  /** Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action: Action;
  /** Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<RecipeProcess>;
  /** Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<RecipeProcess>;
  /** References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
   */
  stage?: Maybe<ProcessSpecification>;
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: Maybe<Action>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
};

export type RecipeFlowCreateParams = {
  action: Scalars["ID"];
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  recipeFlowResource?: Maybe<Scalars["ID"]>;
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  recipeInputOf?: Maybe<Scalars["ID"]>;
  recipeOutputOf?: Maybe<Scalars["ID"]>;
  stage?: Maybe<Scalars["ID"]>;
  state?: Maybe<Scalars["ID"]>;
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
  recipeFlowResource?: Maybe<Scalars["ID"]>;
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  recipeInputOf?: Maybe<Scalars["ID"]>;
  recipeOutputOf?: Maybe<Scalars["ID"]>;
  stage?: Maybe<Scalars["ID"]>;
  state?: Maybe<Scalars["ID"]>;
  note?: Maybe<Scalars["String"]>;
};

/** Specifies a process in a recipe for use in planning from recipe. */
export type RecipeProcess = {
  __typename?: "RecipeProcess";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<Duration>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** The standard specification or definition of a process. */
  processConformsTo: ProcessSpecification;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
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

/** Specifies the resource as part of a recipe, for use in planning from recipe. */
export type RecipeResource = {
  __typename?: "RecipeResource";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an object. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Unit>;
  /** The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Unit>;
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars["URI"]>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  /** The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
   */
  resourceConformsTo?: Maybe<ResourceSpecification>;
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  /** Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
   */
  substitutable?: Maybe<Scalars["Boolean"]>;
};

export type RecipeResourceCreateParams = {
  name: Scalars["String"];
  unitOfResource?: Maybe<Scalars["ID"]>;
  unitOfEffort?: Maybe<Scalars["ID"]>;
  substitutable?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<Scalars["URI"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
};

export type RecipeResourceResponse = {
  __typename?: "RecipeResourceResponse";
  recipeResource?: Maybe<RecipeResource>;
};

export type RecipeResourceUpdateParams = {
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  unitOfResource?: Maybe<Scalars["ID"]>;
  unitOfEffort?: Maybe<Scalars["ID"]>;
  substitutable?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<Scalars["URI"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
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
  /** An informal or formal textual identifier for an object. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars["URI"]>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
  conformingResources?: Maybe<Array<EconomicResource>>;
};

export type ResourceSpecificationCreateParams = {
  name: Scalars["String"];
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
  image?: Maybe<Scalars["URI"]>;
  resourceClassifiedAs?: Maybe<Array<Scalars["URI"]>>;
  note?: Maybe<Scalars["String"]>;
};

/** Represents many-to-many relationships between intents and commitments or events
 * that partially or full satisfy one or more intents.
 */
export type Satisfaction = {
  __typename?: "Satisfaction";
  id: Scalars["ID"];
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Intent;
  /** A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: EventOrCommitment;
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
};

export type SatisfactionCreateParams = {
  satisfies: Scalars["ID"];
  satisfiedBy: Scalars["ID"];
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
  note?: Maybe<Scalars["String"]>;
};

/** An estimated or analytical logical collection of higher level processes used for budgeting, analysis, plan refinement, etc. */
export type Scenario = {
  __typename?: "Scenario";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars["DateTime"]>;
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars["DateTime"]>;
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars["AnyType"]>>;
  /** This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scenario>;
  note?: Maybe<Scalars["String"]>;
};

/** The type definition of one or more scenarios, such as Yearly Budget. */
export type ScenarioDefinition = {
  __typename?: "ScenarioDefinition";
  id: Scalars["ID"];
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name: Scalars["String"];
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<Duration>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
};

/** Represents many-to-many relationships between claim and economic events that fully or partially settle one or more claims. */
export type Settlement = {
  __typename?: "Settlement";
  id: Scalars["ID"];
  /** A `Claim` which is fully or partially settled by an `EconomicEvent`. */
  settles: Claim;
  /** The `EconomicEvent` fully or partially settling a `Claim`. */
  settledBy: EconomicEvent;
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<QuantityValue>;
  /** The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
   */
  effortQuantity?: Maybe<QuantityValue>;
  /** A textual description or comment. */
  note?: Maybe<Scalars["String"]>;
};

export type SettlementCreateParams = {
  settles: Scalars["ID"];
  settledBy: Scalars["ID"];
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  resourceQuantity?: Maybe<IQuantityValue>;
  effortQuantity?: Maybe<IQuantityValue>;
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
  /** A textual description or comment. */
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

/** Defines a unit of measurement, along with its display symbol.
 * See http://qudt.org/1.1/vocab/unit
 */
export type Unit = {
  __typename?: "Unit";
  id: Scalars["ID"];
  name: Scalars["String"];
  symbol: Scalars["String"];
};
