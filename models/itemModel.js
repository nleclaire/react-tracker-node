const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Item must have a name'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A item must have a description'],
    trim: true,
  },
  status: {
    type: String,
    required: [true, 'Item must have a status'],
    trim: true,
  },
  itemType: {
    type: String,
    required: [true, 'Item must have an item type'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;



// name, description, status, owners, type, complexity, tasks, comments
