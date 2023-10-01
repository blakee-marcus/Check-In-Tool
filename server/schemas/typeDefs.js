const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Customer {
    _id: ID!
    name: String!
    status: String!
    checkInTime: String
    fromUser: User!
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
    addCustomer(
      name: String!
    ): Customer!
    updateCustomer(customerId: ID!, name: String, status: String!): Customer!
    removeCustomer(customerId: ID!): Customer!
    login(email: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
    updateUser(username: String!, email: String!, password: String): User!
    removeUser(userId: ID!): User!
  }
`;

module.exports = typeDefs;
