const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => { // in this case, "/" represents "api/items", because we are using the router
    Item.find()
      .sort({ date: -1 })  //-1 means descending order
      .then(items => res.json(items));
});

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/', (req, res) => { // in this case, "/" represents "api/items", because we are using the router
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    // if id does not exist:
    .catch(error => res.status(404).json({success: false}));
  });

// ES6 version will not work without Babel
// export default router;
module.exports = router;
