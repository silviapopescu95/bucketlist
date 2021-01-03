const express = require('express')
const router = express.Router()

const BucketList = require('../../models/BucketList')

router.get('/test', (req, res) => res.json({msg: 'backend works'}))

// @route GET /api/bucketlist
// @desc Get (public)
router.get('/', (req, res) => {
  BucketList.find()
    .then(info => res.json(info))
    .catch(err => res.status(404).json({msg: 'no list found'}))
})

// @route POST /api/bucketlist
// @desc Create new (public)
router.post('/', (req, res) => {
  const newBucket = new BucketList({
    title: req.body.title,
    description: req.body.description,
  })


  newBucket.save().then(info => res.json(info))
})

// @route DELETE /api/bucketlist
// @desc Delete (public)
router.delete('/', (req, res) => {
  BucketList.findOneAndRemove({_id: req.body.id}).then(() => {
    res.json({success: true})
  })
})

// @route UPDATE /api/bucketlist/update/:id
// @desc Update (public)
router.post('/update/:id', (req, res) => {
  BucketList.findOneAndUpdate(
    {_id: req.params.id},
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
      },
    },
    {new: true},

    )
    .then(info => {
      res.json(info)
    })
    .catch(err => res.status(400).json({msg: 'update failed'}))
})

module.exports = router