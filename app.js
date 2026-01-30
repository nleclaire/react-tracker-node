const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);

module.exports = app;

