const mongoose = require('mongoose');

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
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

