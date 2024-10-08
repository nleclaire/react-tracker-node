const User = require('../models/userModel');
// const AppError = require('../utils/appError');

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });

    res.status(201).json({
        status: 'success',
        token,
        data: {
            newUser
        },
    });
};
