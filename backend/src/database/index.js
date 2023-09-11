const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${process.env.UserName}:${process.env.Password}@${process.env.MongoDB_URI}/UsernameDB`
  )
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err));
