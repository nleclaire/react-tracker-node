exports.getAllUsers = async (req, res) => {
  console.log('Hello from get All Users!');
  try {
      res.status(200).json({
          status: 'Success!',
          length: users.length,
          data: {
              users
          }
      });
  } catch (err) {
      console.error('Something bad happened...\n');
      res.status(400).json({
          status: 'fail',
          message: err,
        });
  };
}

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not yet been defined!',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not yet been defined!',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not yet been defined!',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route has not yet been defined!',
  });
};

