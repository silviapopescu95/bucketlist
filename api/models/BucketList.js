const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BucketListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = BucketList = mongoose.model('bucketlist', BucketListSchema)