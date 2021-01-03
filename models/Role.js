const mongoose = require("mongoose");
const Schema = mongoose.Schema

// const RoleSchema = new Schema({
//   name: {
//     type: String,
//   },
// })

// module.exports = Role = mongoose.model('Role', RoleSchema)


const Role = mongoose.model(
  "Role",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Role;