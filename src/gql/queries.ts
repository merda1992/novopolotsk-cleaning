import { gql } from '@apollo/client';

export const createUser = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(createUser: $user) {
      id
      email
      name
      createdAt
      updatedAt
      status
    }
  }
`;

export const updateUser = gql`
  mutation updateUser($user: UpdateUserInput!) {
    updateUser(updateUser: $user) {
      id
      email
      createAt
      updateAt
    }
  }
`;

export const removeUser = gql`
  mutation removeUser($id: Float!) {
    removeUser(id: $id) {
      id
    }
  }
`;

export const getAllUsers = gql`
  query getAllUsers {
    getAllUsers {
      id
      email
    }
  }
`;

export const getOneUser = gql`
  query getOneUser($id: Float!) {
    getOneUser(id: $id) {
      id
      email
      name
      createAt
      updateAt
    }
  }
`;

export const login = gql`
  mutation login($auth: AuthInput!) {
    login(auth: $auth) {
      token
      user {
        id
        email
      }
    }
  }
`;
