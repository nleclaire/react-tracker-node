const express = require('express');

const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);

module.exports = app;

