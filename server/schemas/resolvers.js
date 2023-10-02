/* eslint-disable no-underscore-dangle */
const { AuthenticationError } = require('apollo-server-express');
const { Day, Customer, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id });
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    getDay: async (_, { date }) => {
      const dayData = await Day.findOne({ date }).populate('customers');
      return dayData;
    },
    getAllDays: async () => {
      const days = await Day.find().populate({
        path: 'customers',
        populate: {
          path: 'fromUser',
          model: 'User',
        },
      });
      return days;
    },

    getCustomer: async (_, { customerId }) => {
      const customerData = await Customer.findOne({ _id: customerId }).populate(
        'fromUser'
      );
      return customerData;
    },
  },

  Mutation: {
    addDay: async (_, { date }, context) => {
      if (context.user) {
        const day = await Day.create({ date });
        return day;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addCustomer: async (_, args, context) => {
      if (context.user) {
        const customer = await Customer.create({
          name: args.name,
          fromUser: context.user._id,
        });

        // Convert the checkInTime to a date-only string
        const checkInDateOnly = new Date(customer.checkInTime);
        checkInDateOnly.setHours(0, 0, 0, 0); // Reset time component

        await Day.findOneAndUpdate(
          { date: checkInDateOnly },
          { $addToSet: { customers: customer._id } },
          { upsert: true },
        );

        return customer;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    updateCustomer: async (_, args, context) => {
      if (context.user) {
        const customer = await Customer.findOneAndUpdate(
          { _id: args.customerId },
          { name: args.name, status: args.status },
          { new: true },
        );

        return customer;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    removeCustomer: async (_, { customerId }, context) => {
      if (context.user) {
        const customer = await Customer.findOneAndDelete({ _id: customerId });

        await Day.findOneAndUpdate(
          { date: customer.checkInTime },
          { $pull: { customers: customer._id } },
        );

        return customer;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('No user found with this email address.');
      }

      user.password = password;

      await user.save();

      return user;
    },

    removeUser: async (_, { username }, context) => {
      if (context.user.username === username) {
        const user = await User.findOneAndDelete({ _id: context.user._id });
        return user;
      }
      throw new AuthenticationError('Not Logged In');
    },
  },
};

module.exports = resolvers;
