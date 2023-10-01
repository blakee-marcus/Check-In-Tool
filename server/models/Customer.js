const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const customerSchema = new Schema({
  status: {
    type: String,
    required: true,
    enum: ['waiting', 'assisting', 'assisted'],
    default: 'waiting',
  },
  checkInTime: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  name: {
    type: String,
  },
  fromUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Customer = model('Customer', customerSchema);
module.exports = Customer;