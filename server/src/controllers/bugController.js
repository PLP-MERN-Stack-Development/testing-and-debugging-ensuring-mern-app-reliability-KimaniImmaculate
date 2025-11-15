const Bug = require('../models/Bug');

// CREATE BUG
exports.createBug = async (req, res, next) => {
  try {
    const bug = await Bug.create({
      ...req.body,
    });
    res.status(201).json(bug);
  } catch (err) {
    next(err); // pass error to errorHandler
  }
};

// GET ALL BUGS
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
};

// GET BUG BY ID
exports.getBugById = async (req, res, next) => {
  try {
    const bug = await Bug.findById(req.params.id);
    if (!bug) {
      res.status(404); // set status
      throw new Error('Bug not found'); // forward to errorHandler
    }
    res.status(200).json(bug);
  } catch (err) {
    next(err);
  }
};

// UPDATE BUG
exports.updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!bug) {
      res.status(404);
      throw new Error('Bug not found');
    }

    res.status(200).json(bug);
  } catch (err) {
    next(err);
  }
};

// DELETE BUG
exports.deleteBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);

    if (!bug) {
      res.status(404);
      throw new Error('Bug not found');
    }

    res.status(200).json({ message: "Bug deleted" });
  } catch (err) {
    next(err);
  }
};

