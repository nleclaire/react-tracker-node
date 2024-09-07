const mongoose = require('mongoose');
const Item = require('./itemModel');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A project must have a title'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'A project must have a description'],
    trim: true,
  },
  items: [Item.schema],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

