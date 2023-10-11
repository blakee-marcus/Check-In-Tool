const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Customer {
    _id: ID!
    name: String!
    status: String!
    locationWaiting: String
    checkInTime: String
    lastTouch: User!
  }

  type Day {
    _id: ID!
    date: String!
    customers: [Customer]
  }

  type User {
    _id: ID!
    username: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    getDay(date: String!): Day
    getAllDays: [Day]
    getCustomer(customerId: ID!): Customer
  }

  type Mutation {
    addDay(date: String!): Day!
    addCustomer(name: String!, checkInTime: String, lastTouch: ID): Customer!
    updateCustomer(customerId: ID!, name: String, status: String!, lastTouch: ID, locationWaiting: String): Customer!
    removeCustomer(customerId: ID!): Customer!
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    updateUser(username: String!, password: String!): User!
    removeUser(username: ID!): User!
  }
`;

module.exports = typeDefs;
