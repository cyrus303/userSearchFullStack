require('dotenv').config();
const express = require('express');
const userRoute = require('./routes/user');
require('./database/index');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api/user', userRoute);

app.listen(PORT, () => {
  console.log('Running express server at port: ' + PORT);
});
