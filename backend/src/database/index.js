const mongoose = require('mongoose');

const {connect, Schema, model} = mongoose;

connect(
  `mongodb+srv://${process.env.UserName}:${process.env.Password}@${process.env.MongoDB_URI}/UsernameDB`
)
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
});

const UserModel = model('User', userSchema);

module.exports = UserModel;
