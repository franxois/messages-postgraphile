import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /**
   * A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519)
   * which securely represents claims between two parties.
   */
  JwtToken: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

export enum AppRole {
  AppAdmin = 'APP_ADMIN',
  AppUser = 'APP_USER'
}

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  __typename?: 'AuthenticatePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  jwtToken?: Maybe<Scalars['JwtToken']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the create `Message` mutation. */
export type CreateMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Message` to be created by this mutation. */
  message: MessageInput;
};

/** The output of our create `Message` mutation. */
export type CreateMessagePayload = {
  __typename?: 'CreateMessagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Message` that was created by this mutation. */
  message?: Maybe<Message>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Message`. */
  userBySender?: Maybe<User>;
  /** Reads a single `User` that is related to this `Message`. */
  userByRecipient?: Maybe<User>;
  /** An edge for our `Message`. May be used by Relay 1. */
  messageEdge?: Maybe<MessagesEdge>;
};


/** The output of our create `Message` mutation. */
export type CreateMessagePayloadMessageEdgeArgs = {
  orderBy?: Maybe<Array<MessagesOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};



/** All input for the `deleteMessageById` mutation. */
export type DeleteMessageByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteMessage` mutation. */
export type DeleteMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Message` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Message` mutation. */
export type DeleteMessagePayload = {
  __typename?: 'DeleteMessagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Message` that was deleted by this mutation. */
  message?: Maybe<Message>;
  deletedMessageId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Message`. */
  userBySender?: Maybe<User>;
  /** Reads a single `User` that is related to this `Message`. */
  userByRecipient?: Maybe<User>;
  /** An edge for our `Message`. May be used by Relay 1. */
  messageEdge?: Maybe<MessagesEdge>;
};


/** The output of our delete `Message` mutation. */
export type DeleteMessagePayloadMessageEdgeArgs = {
  orderBy?: Maybe<Array<MessagesOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteUserByUsername` mutation. */
export type DeleteUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};


export type Message = Node & {
  __typename?: 'Message';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  title: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['Datetime'];
  sender: Scalars['UUID'];
  recipient: Scalars['UUID'];
  /** Reads a single `User` that is related to this `Message`. */
  userBySender?: Maybe<User>;
  /** Reads a single `User` that is related to this `Message`. */
  userByRecipient?: Maybe<User>;
};

/** A condition to be used against `Message` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MessageCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `content` field. */
  content?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `sender` field. */
  sender?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `recipient` field. */
  recipient?: Maybe<Scalars['UUID']>;
};

/** An input for mutations affecting `Message` */
export type MessageInput = {
  id?: Maybe<Scalars['UUID']>;
  title: Scalars['String'];
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
  sender: Scalars['UUID'];
  recipient: Scalars['UUID'];
};

/** Represents an update to a `Message`. Fields that are set will be updated. */
export type MessagePatch = {
  id?: Maybe<Scalars['UUID']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
  sender?: Maybe<Scalars['UUID']>;
  recipient?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Message` values. */
export type MessagesConnection = {
  __typename?: 'MessagesConnection';
  /** A list of `Message` objects. */
  nodes: Array<Maybe<Message>>;
  /** A list of edges which contains the `Message` and cursor to aid in pagination. */
  edges: Array<MessagesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Message` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Message` edge in the connection. */
export type MessagesEdge = {
  __typename?: 'MessagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Message` at the end of the edge. */
  node?: Maybe<Message>;
};

/** Methods to use when ordering `Message`. */
export enum MessagesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  SenderAsc = 'SENDER_ASC',
  SenderDesc = 'SENDER_DESC',
  RecipientAsc = 'RECIPIENT_ASC',
  RecipientDesc = 'RECIPIENT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Message`. */
  createMessage?: Maybe<CreateMessagePayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Updates a single `Message` using its globally unique id and a patch. */
  updateMessage?: Maybe<UpdateMessagePayload>;
  /** Updates a single `Message` using a unique key and a patch. */
  updateMessageById?: Maybe<UpdateMessagePayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUsername?: Maybe<UpdateUserPayload>;
  /** Deletes a single `Message` using its globally unique id. */
  deleteMessage?: Maybe<DeleteMessagePayload>;
  /** Deletes a single `Message` using a unique key. */
  deleteMessageById?: Maybe<DeleteMessagePayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUsername?: Maybe<DeleteUserPayload>;
  authenticate?: Maybe<AuthenticatePayload>;
  sendMessage?: Maybe<SendMessagePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMessageArgs = {
  input: UpdateMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMessageByIdArgs = {
  input: UpdateMessageByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMessageArgs = {
  input: DeleteMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMessageByIdArgs = {
  input: DeleteMessageByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSendMessageArgs = {
  input: SendMessageInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

export type PenFriend = {
  __typename?: 'PenFriend';
  friendId?: Maybe<Scalars['UUID']>;
  lastMessageDate?: Maybe<Scalars['Datetime']>;
  /** Reads a single `User` that is related to this `PenFriend`. */
  userByFriendId?: Maybe<User>;
};

/**
 * A condition to be used against `PenFriend` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PenFriendCondition = {
  /** Checks for equality with the object’s `friendId` field. */
  friendId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `lastMessageDate` field. */
  lastMessageDate?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `PenFriend` values. */
export type PenFriendsConnection = {
  __typename?: 'PenFriendsConnection';
  /** A list of `PenFriend` objects. */
  nodes: Array<Maybe<PenFriend>>;
  /** A list of edges which contains the `PenFriend` and cursor to aid in pagination. */
  edges: Array<PenFriendsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PenFriend` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PenFriend` edge in the connection. */
export type PenFriendsEdge = {
  __typename?: 'PenFriendsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PenFriend` at the end of the edge. */
  node?: Maybe<PenFriend>;
};

/** Methods to use when ordering `PenFriend`. */
export enum PenFriendsOrderBy {
  Natural = 'NATURAL',
  FriendIdAsc = 'FRIEND_ID_ASC',
  FriendIdDesc = 'FRIEND_ID_DESC',
  LastMessageDateAsc = 'LAST_MESSAGE_DATE_ASC',
  LastMessageDateDesc = 'LAST_MESSAGE_DATE_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Message`. */
  allMessages?: Maybe<MessagesConnection>;
  /** Reads and enables pagination through a set of `PenFriend`. */
  allPenFriends?: Maybe<PenFriendsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  messageById?: Maybe<Message>;
  userById?: Maybe<User>;
  userByUsername?: Maybe<User>;
  /** Gets the user who was identified by our JWT. */
  currentUser?: Maybe<User>;
  currentUserId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `Message`. */
  messagesWith?: Maybe<MessagesConnection>;
  /** Reads a single `Message` using its globally unique `ID`. */
  message?: Maybe<Message>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMessagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MessagesOrderBy>>;
  condition?: Maybe<MessageCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPenFriendsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PenFriendsOrderBy>>;
  condition?: Maybe<PenFriendCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UsersOrderBy>>;
  condition?: Maybe<UserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMessageByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMessagesWithArgs = {
  friendId?: Maybe<Scalars['UUID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMessageArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};

/** All input for the `sendMessage` mutation. */
export type SendMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  recipient: Scalars['UUID'];
  title: Scalars['String'];
  content: Scalars['String'];
};

/** The output of our `sendMessage` mutation. */
export type SendMessagePayload = {
  __typename?: 'SendMessagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Maybe<Message>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** All input for the `updateMessageById` mutation. */
export type UpdateMessageByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Message` being updated. */
  messagePatch: MessagePatch;
  id: Scalars['UUID'];
};

/** All input for the `updateMessage` mutation. */
export type UpdateMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Message` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Message` being updated. */
  messagePatch: MessagePatch;
};

/** The output of our update `Message` mutation. */
export type UpdateMessagePayload = {
  __typename?: 'UpdateMessagePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Message` that was updated by this mutation. */
  message?: Maybe<Message>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Message`. */
  userBySender?: Maybe<User>;
  /** Reads a single `User` that is related to this `Message`. */
  userByRecipient?: Maybe<User>;
  /** An edge for our `Message`. May be used by Relay 1. */
  messageEdge?: Maybe<MessagesEdge>;
};


/** The output of our update `Message` mutation. */
export type UpdateMessagePayloadMessageEdgeArgs = {
  orderBy?: Maybe<Array<MessagesOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
  id: Scalars['UUID'];
};

/** All input for the `updateUserByUsername` mutation. */
export type UpdateUserByUsernameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
  username: Scalars['String'];
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  id: Scalars['UUID'];
  username: Scalars['String'];
  role?: Maybe<AppRole>;
  createdAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Message`. */
  messagesBySender: MessagesConnection;
  /** Reads and enables pagination through a set of `Message`. */
  messagesByRecipient: MessagesConnection;
  /** Reads and enables pagination through a set of `PenFriend`. */
  penFriendsByFriendId: PenFriendsConnection;
};


export type UserMessagesBySenderArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MessagesOrderBy>>;
  condition?: Maybe<MessageCondition>;
};


export type UserMessagesByRecipientArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MessagesOrderBy>>;
  condition?: Maybe<MessageCondition>;
};


export type UserPenFriendsByFriendIdArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PenFriendsOrderBy>>;
  condition?: Maybe<PenFriendCondition>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `username` field. */
  username?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `role` field. */
  role?: Maybe<AppRole>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  id?: Maybe<Scalars['UUID']>;
  username: Scalars['String'];
  role?: Maybe<AppRole>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  id?: Maybe<Scalars['UUID']>;
  username?: Maybe<Scalars['String']>;
  role?: Maybe<AppRole>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SendMessageMutationVariables = Exact<{
  content: Scalars['String'];
  recipient: Scalars['UUID'];
  title: Scalars['String'];
}>;


export type SendMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendMessage?: Maybe<(
    { __typename?: 'SendMessagePayload' }
    & { messages?: Maybe<Array<Maybe<(
      { __typename?: 'Message' }
      & Pick<Message, 'createdAt'>
    )>>> }
  )> }
);

export type MessagesWithQueryVariables = Exact<{
  id?: Maybe<Scalars['UUID']>;
}>;


export type MessagesWithQuery = (
  { __typename?: 'Query' }
  & { messagesWith?: Maybe<(
    { __typename?: 'MessagesConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Message' }
      & Pick<Message, 'sender' | 'title' | 'content' | 'createdAt'>
    )>> }
  )> }
);

export type AllPenFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPenFriendsQuery = (
  { __typename?: 'Query' }
  & { allPenFriends?: Maybe<(
    { __typename?: 'PenFriendsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'PenFriend' }
      & { userByFriendId?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username' | 'id'>
      )> }
    )>> }
  )> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<(
    { __typename?: 'UsersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    )>> }
  )> }
);

export type GetJwtMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetJwtMutation = (
  { __typename?: 'Mutation' }
  & { authenticate?: Maybe<(
    { __typename?: 'AuthenticatePayload' }
    & Pick<AuthenticatePayload, 'jwtToken'>
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AppRole: AppRole;
  AuthenticateInput: AuthenticateInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  AuthenticatePayload: ResolverTypeWrapper<AuthenticatePayload>;
  CreateMessageInput: CreateMessageInput;
  CreateMessagePayload: ResolverTypeWrapper<CreateMessagePayload>;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  DeleteMessageByIdInput: DeleteMessageByIdInput;
  DeleteMessageInput: DeleteMessageInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  DeleteMessagePayload: ResolverTypeWrapper<DeleteMessagePayload>;
  DeleteUserByIdInput: DeleteUserByIdInput;
  DeleteUserByUsernameInput: DeleteUserByUsernameInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: ResolverTypeWrapper<DeleteUserPayload>;
  JwtToken: ResolverTypeWrapper<Scalars['JwtToken']>;
  Message: ResolverTypeWrapper<Message>;
  MessageCondition: MessageCondition;
  MessageInput: MessageInput;
  MessagePatch: MessagePatch;
  MessagesConnection: ResolverTypeWrapper<MessagesConnection>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MessagesEdge: ResolverTypeWrapper<MessagesEdge>;
  MessagesOrderBy: MessagesOrderBy;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Message'] | ResolversTypes['Query'] | ResolversTypes['User'];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  PenFriend: ResolverTypeWrapper<PenFriend>;
  PenFriendCondition: PenFriendCondition;
  PenFriendsConnection: ResolverTypeWrapper<PenFriendsConnection>;
  PenFriendsEdge: ResolverTypeWrapper<PenFriendsEdge>;
  PenFriendsOrderBy: PenFriendsOrderBy;
  Query: ResolverTypeWrapper<{}>;
  SendMessageInput: SendMessageInput;
  SendMessagePayload: ResolverTypeWrapper<SendMessagePayload>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UpdateMessageByIdInput: UpdateMessageByIdInput;
  UpdateMessageInput: UpdateMessageInput;
  UpdateMessagePayload: ResolverTypeWrapper<UpdateMessagePayload>;
  UpdateUserByIdInput: UpdateUserByIdInput;
  UpdateUserByUsernameInput: UpdateUserByUsernameInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: ResolverTypeWrapper<UpdateUserPayload>;
  User: ResolverTypeWrapper<User>;
  UserCondition: UserCondition;
  UserInput: UserInput;
  UserPatch: UserPatch;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  UsersEdge: ResolverTypeWrapper<UsersEdge>;
  UsersOrderBy: UsersOrderBy;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthenticateInput: AuthenticateInput;
  String: Scalars['String'];
  AuthenticatePayload: AuthenticatePayload;
  CreateMessageInput: CreateMessageInput;
  CreateMessagePayload: CreateMessagePayload;
  CreateUserInput: CreateUserInput;
  CreateUserPayload: CreateUserPayload;
  Cursor: Scalars['Cursor'];
  Datetime: Scalars['Datetime'];
  DeleteMessageByIdInput: DeleteMessageByIdInput;
  DeleteMessageInput: DeleteMessageInput;
  ID: Scalars['ID'];
  DeleteMessagePayload: DeleteMessagePayload;
  DeleteUserByIdInput: DeleteUserByIdInput;
  DeleteUserByUsernameInput: DeleteUserByUsernameInput;
  DeleteUserInput: DeleteUserInput;
  DeleteUserPayload: DeleteUserPayload;
  JwtToken: Scalars['JwtToken'];
  Message: Message;
  MessageCondition: MessageCondition;
  MessageInput: MessageInput;
  MessagePatch: MessagePatch;
  MessagesConnection: MessagesConnection;
  Int: Scalars['Int'];
  MessagesEdge: MessagesEdge;
  Mutation: {};
  Node: ResolversParentTypes['Message'] | ResolversParentTypes['Query'] | ResolversParentTypes['User'];
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  PenFriend: PenFriend;
  PenFriendCondition: PenFriendCondition;
  PenFriendsConnection: PenFriendsConnection;
  PenFriendsEdge: PenFriendsEdge;
  Query: {};
  SendMessageInput: SendMessageInput;
  SendMessagePayload: SendMessagePayload;
  UUID: Scalars['UUID'];
  UpdateMessageByIdInput: UpdateMessageByIdInput;
  UpdateMessageInput: UpdateMessageInput;
  UpdateMessagePayload: UpdateMessagePayload;
  UpdateUserByIdInput: UpdateUserByIdInput;
  UpdateUserByUsernameInput: UpdateUserByUsernameInput;
  UpdateUserInput: UpdateUserInput;
  UpdateUserPayload: UpdateUserPayload;
  User: User;
  UserCondition: UserCondition;
  UserInput: UserInput;
  UserPatch: UserPatch;
  UsersConnection: UsersConnection;
  UsersEdge: UsersEdge;
};

export type AuthenticatePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticatePayload'] = ResolversParentTypes['AuthenticatePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jwtToken?: Resolver<Maybe<ResolversTypes['JwtToken']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateMessagePayload'] = ResolversParentTypes['CreateMessagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userBySender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userByRecipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messageEdge?: Resolver<Maybe<ResolversTypes['MessagesEdge']>, ParentType, ContextType, RequireFields<CreateMessagePayloadMessageEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<CreateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DeleteMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteMessagePayload'] = ResolversParentTypes['DeleteMessagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  deletedMessageId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userBySender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userByRecipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messageEdge?: Resolver<Maybe<ResolversTypes['MessagesEdge']>, ParentType, ContextType, RequireFields<DeleteMessagePayloadMessageEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteUserPayload'] = ResolversParentTypes['DeleteUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  deletedUserId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<DeleteUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JwtTokenScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JwtToken'], any> {
  name: 'JwtToken';
}

export type MessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  userBySender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userByRecipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagesConnection'] = ResolversParentTypes['MessagesConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['Message']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MessagesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessagesEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MessagesEdge'] = ResolversParentTypes['MessagesEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createMessage?: Resolver<Maybe<ResolversTypes['CreateMessagePayload']>, ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  updateMessage?: Resolver<Maybe<ResolversTypes['UpdateMessagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateMessageArgs, 'input'>>;
  updateMessageById?: Resolver<Maybe<ResolversTypes['UpdateMessagePayload']>, ParentType, ContextType, RequireFields<MutationUpdateMessageByIdArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
  updateUserById?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByIdArgs, 'input'>>;
  updateUserByUsername?: Resolver<Maybe<ResolversTypes['UpdateUserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserByUsernameArgs, 'input'>>;
  deleteMessage?: Resolver<Maybe<ResolversTypes['DeleteMessagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteMessageArgs, 'input'>>;
  deleteMessageById?: Resolver<Maybe<ResolversTypes['DeleteMessagePayload']>, ParentType, ContextType, RequireFields<MutationDeleteMessageByIdArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'input'>>;
  deleteUserById?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByIdArgs, 'input'>>;
  deleteUserByUsername?: Resolver<Maybe<ResolversTypes['DeleteUserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserByUsernameArgs, 'input'>>;
  authenticate?: Resolver<Maybe<ResolversTypes['AuthenticatePayload']>, ParentType, ContextType, RequireFields<MutationAuthenticateArgs, 'input'>>;
  sendMessage?: Resolver<Maybe<ResolversTypes['SendMessagePayload']>, ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'input'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Message' | 'Query' | 'User', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PenFriendResolvers<ContextType = any, ParentType extends ResolversParentTypes['PenFriend'] = ResolversParentTypes['PenFriend']> = {
  friendId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  lastMessageDate?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  userByFriendId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PenFriendsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PenFriendsConnection'] = ResolversParentTypes['PenFriendsConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['PenFriend']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['PenFriendsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PenFriendsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PenFriendsEdge'] = ResolversParentTypes['PenFriendsEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PenFriend']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  allMessages?: Resolver<Maybe<ResolversTypes['MessagesConnection']>, ParentType, ContextType, RequireFields<QueryAllMessagesArgs, 'orderBy'>>;
  allPenFriends?: Resolver<Maybe<ResolversTypes['PenFriendsConnection']>, ParentType, ContextType, RequireFields<QueryAllPenFriendsArgs, 'orderBy'>>;
  allUsers?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryAllUsersArgs, 'orderBy'>>;
  messageById?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageByIdArgs, 'id'>>;
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>;
  userByUsername?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByUsernameArgs, 'username'>>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  currentUserId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  messagesWith?: Resolver<Maybe<ResolversTypes['MessagesConnection']>, ParentType, ContextType, RequireFields<QueryMessagesWithArgs, never>>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType, RequireFields<QueryMessageArgs, 'nodeId'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'nodeId'>>;
};

export type SendMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SendMessagePayload'] = ResolversParentTypes['SendMessagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UpdateMessagePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateMessagePayload'] = ResolversParentTypes['UpdateMessagePayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userBySender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userByRecipient?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messageEdge?: Resolver<Maybe<ResolversTypes['MessagesEdge']>, ParentType, ContextType, RequireFields<UpdateMessagePayloadMessageEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserPayload'] = ResolversParentTypes['UpdateUserPayload']> = {
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  userEdge?: Resolver<Maybe<ResolversTypes['UsersEdge']>, ParentType, ContextType, RequireFields<UpdateUserPayloadUserEdgeArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['AppRole']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  messagesBySender?: Resolver<ResolversTypes['MessagesConnection'], ParentType, ContextType, RequireFields<UserMessagesBySenderArgs, 'orderBy'>>;
  messagesByRecipient?: Resolver<ResolversTypes['MessagesConnection'], ParentType, ContextType, RequireFields<UserMessagesByRecipientArgs, 'orderBy'>>;
  penFriendsByFriendId?: Resolver<ResolversTypes['PenFriendsConnection'], ParentType, ContextType, RequireFields<UserPenFriendsByFriendIdArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  nodes?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UsersEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersEdge'] = ResolversParentTypes['UsersEdge']> = {
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthenticatePayload?: AuthenticatePayloadResolvers<ContextType>;
  CreateMessagePayload?: CreateMessagePayloadResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  DeleteMessagePayload?: DeleteMessagePayloadResolvers<ContextType>;
  DeleteUserPayload?: DeleteUserPayloadResolvers<ContextType>;
  JwtToken?: GraphQLScalarType;
  Message?: MessageResolvers<ContextType>;
  MessagesConnection?: MessagesConnectionResolvers<ContextType>;
  MessagesEdge?: MessagesEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PenFriend?: PenFriendResolvers<ContextType>;
  PenFriendsConnection?: PenFriendsConnectionResolvers<ContextType>;
  PenFriendsEdge?: PenFriendsEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SendMessagePayload?: SendMessagePayloadResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UpdateMessagePayload?: UpdateMessagePayloadResolvers<ContextType>;
  UpdateUserPayload?: UpdateUserPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  UsersEdge?: UsersEdgeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const SendMessageDocument = gql`
    mutation SendMessage($content: String!, $recipient: UUID!, $title: String!) {
  sendMessage(input: {content: $content, recipient: $recipient, title: $title}) {
    messages {
      createdAt
    }
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      content: // value for 'content'
 *      recipient: // value for 'recipient'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const MessagesWithDocument = gql`
    query messagesWith($id: UUID) {
  messagesWith(friendId: $id) {
    nodes {
      sender
      title
      content
      createdAt
    }
  }
}
    `;

/**
 * __useMessagesWithQuery__
 *
 * To run a query within a React component, call `useMessagesWithQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesWithQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesWithQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMessagesWithQuery(baseOptions?: Apollo.QueryHookOptions<MessagesWithQuery, MessagesWithQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesWithQuery, MessagesWithQueryVariables>(MessagesWithDocument, options);
      }
export function useMessagesWithLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesWithQuery, MessagesWithQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesWithQuery, MessagesWithQueryVariables>(MessagesWithDocument, options);
        }
export type MessagesWithQueryHookResult = ReturnType<typeof useMessagesWithQuery>;
export type MessagesWithLazyQueryHookResult = ReturnType<typeof useMessagesWithLazyQuery>;
export type MessagesWithQueryResult = Apollo.QueryResult<MessagesWithQuery, MessagesWithQueryVariables>;
export const AllPenFriendsDocument = gql`
    query AllPenFriends {
  allPenFriends {
    nodes {
      userByFriendId {
        username
        id
      }
    }
  }
}
    `;

/**
 * __useAllPenFriendsQuery__
 *
 * To run a query within a React component, call `useAllPenFriendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPenFriendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPenFriendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPenFriendsQuery(baseOptions?: Apollo.QueryHookOptions<AllPenFriendsQuery, AllPenFriendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPenFriendsQuery, AllPenFriendsQueryVariables>(AllPenFriendsDocument, options);
      }
export function useAllPenFriendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPenFriendsQuery, AllPenFriendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPenFriendsQuery, AllPenFriendsQueryVariables>(AllPenFriendsDocument, options);
        }
export type AllPenFriendsQueryHookResult = ReturnType<typeof useAllPenFriendsQuery>;
export type AllPenFriendsLazyQueryHookResult = ReturnType<typeof useAllPenFriendsLazyQuery>;
export type AllPenFriendsQueryResult = Apollo.QueryResult<AllPenFriendsQuery, AllPenFriendsQueryVariables>;
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    nodes {
      username
      id
    }
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const GetJwtDocument = gql`
    mutation GetJWT($username: String!) {
  authenticate(input: {username: $username}) {
    jwtToken
  }
}
    `;
export type GetJwtMutationFn = Apollo.MutationFunction<GetJwtMutation, GetJwtMutationVariables>;

/**
 * __useGetJwtMutation__
 *
 * To run a mutation, you first call `useGetJwtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetJwtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getJwtMutation, { data, loading, error }] = useGetJwtMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetJwtMutation(baseOptions?: Apollo.MutationHookOptions<GetJwtMutation, GetJwtMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetJwtMutation, GetJwtMutationVariables>(GetJwtDocument, options);
      }
export type GetJwtMutationHookResult = ReturnType<typeof useGetJwtMutation>;
export type GetJwtMutationResult = Apollo.MutationResult<GetJwtMutation>;
export type GetJwtMutationOptions = Apollo.BaseMutationOptions<GetJwtMutation, GetJwtMutationVariables>;