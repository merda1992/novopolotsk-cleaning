export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthEntity = {
  __typename?: 'AuthEntity';
  token: Scalars['String'];
  user: UserEntity;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserEntity;
  login: AuthEntity;
  removeUser: Scalars['Float'];
  updateUser: UserEntity;
};

export type MutationCreateUserArgs = {
  user: CreateUserInput;
};

export type MutationLoginArgs = {
  auth: AuthInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars['Float'];
};

export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<UserEntity>;
  getOneUser: UserEntity;
};

export type QueryGetOneUserArgs = {
  id: Scalars['Float'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
