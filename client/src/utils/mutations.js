import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($customerId: ID!, $status: String!, $lastTouch: ID, $locationWaiting: String) {
    updateCustomer(customerId: $customerId, status: $status, lastTouch: $lastTouch, locationWaiting: $locationWaiting) {
      status
      locationWaiting
      lastTouch {
        _id
        username
      }
    }
  }
`;

export const ADD_CUSTOMER = gql`
  mutation AddCustomer($name: String!, $checkInTime: String) {
    addCustomer(name: $name, checkInTime: $checkInTime) {
      _id
      name
      checkInTime
      lastTouch {
        _id
        username
      }
      status
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;
