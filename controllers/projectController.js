const Project = require('../models/projectModel');

exports.getAllProjects = async (req, res, next) => {
  const projects = await Project.find({});

  res.status(200).json({
    status: 'success',
    results: projects.length,
    data: {
      projects,
    },
  });
};

exports.getProject = async (req, res, next) => {
  const project = await Project.findById(req.body.id);

  res.status(200).json({
    status: 'success',
    project
  });
};

exports.createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    console.log('Project received...', req.body);

    res.status(201).json({
      status: 'success',
      project
    });

  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      status: 'failure',
      message: error.message
    });
  }

};
