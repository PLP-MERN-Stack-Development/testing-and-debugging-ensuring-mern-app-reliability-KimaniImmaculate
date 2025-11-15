const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

// CREATE
router.post('/', bugController.createBug);

// READ
router.get('/', bugController.getBugs);
router.get('/:id', bugController.getBugById);

// UPDATE
router.put('/:id', bugController.updateBug);

// DELETE
router.delete('/:id', bugController.deleteBug);

module.exports = router;

