const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
  status: {
    type: String,
    required: true,
    enum: ['waiting', 'assisting', 'assisted', 'inspecting'],
    default: 'waiting',
  },
  checkInTime: {
    type: Date,
  },
  name: {
    type: String,
  },
  lastTouch: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Customer = model('Customer', customerSchema);
module.exports = Customer;
