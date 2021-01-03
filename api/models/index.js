const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbAuth = {};

dbAuth.mongoose = mongoose;

dbAuth.user = require("./User");
dbAuth.role = require("./Role");
dbAuth.book = require("./Book");


dbAuth.ROLES = ["user", "admin", "moderator"];

module.exports = dbAuth;