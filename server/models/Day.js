const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const daySchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true, // ensures each day is unique
    get: (timestamp) => dateFormat(timestamp),
  },
  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
    },
  ],
});

const Day = model('Day', daySchema);
module.exports = Day;
