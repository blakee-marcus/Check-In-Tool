import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($customerId: ID!, $status: String!) {
    updateCustomer(customerId: $customerId, status: $status) {
      status
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation AddCustomer($name: String!) {
  addCustomer(name: $name) {
    _id
    name
    checkInTime
    fromUser {
      _id
      username
    }
    status
  }
}
`;
