const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Item must have a name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Item must have a description'],
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'Item must have a status'],
    enum: ['Defined', 'In Progress', 'Completed', 'Blocked'],
    default: 'Defined',
  },
  owners: {
    type: [String],
    default: [],
  },
  type: {
    type: String,
    required: [true, 'Item must have a type'],
    enum: ['story', 'bug', 'chore'],
  },
  complexity: {
    type: Number,
  },
  tasks: {
    type: [String],
    default: [],
  },
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
