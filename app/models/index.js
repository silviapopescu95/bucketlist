const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbAuth = {};

dbAuth.mongoose = mongoose;

dbAuth.user = require("./User");
dbAuth.role = require("./Role");
dbAuth.book = require("./Book");
dbAuth.bucketlist = require("./BucketList");


dbAuth.ROLES = ["user", "admin", "moderator"];

module.exports = dbAuth;