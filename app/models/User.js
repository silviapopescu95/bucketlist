const mongoose = require("mongoose");
const Schema = mongoose.Schema

// const UserSchema = new Schema({
//   username: {
//     type: String,
//   },
//   email: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
//   roles: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Role"
//   },
// })

// module.exports = User = mongoose.model('User', UserSchema)


const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;