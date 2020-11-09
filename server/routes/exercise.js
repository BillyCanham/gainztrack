const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Exercise = require("../models/Exercise");

// @route get api/exercise
// @desc get all users excercises
// @ access Private
router.get("/", auth, async (req, res) => {
  try {
    const exercises = await Exercise.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(exercises);
  } catch {
    console.error(err.message);
    res.status(500).send("server fucked");
  }
});
// @route post api/exercise
// @desc add new excercise
// @ access Private
router.post(
  "/",
  [auth, [check("name", "Name required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
      const newExercise = new Exercise({
        name,
        user: req.user.id,
      });

      const exercise = await newExercise.save();
      res.json(exercise);
    } catch (err) {
      console.log(er.message);
      res.status(500).send("server error");
    }
  }
);
// @route put api/exercise
// @desc update
// @ access Private
router.put("/:id", auth, async (req, res) => {
  const { name } = req.body;
  // build excersie object
  const exerciseFields = {};
  if (name) exerciseFields.name = name;

  try {
    let exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ msg: "not found" });

    // make sure user owns exercise
    if (exercise.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "go away" });
    }

    exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      { $set: exerciseFields },
      { new: true }
    );

    res.json(exercise);
  } catch (err) {
    console.log(er.message);
    res.status(500).send("server error");
  }
});

// @route delete api/exercise
// @desc delete exercise
// @ access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let exercise = await Exercise.findById(req.params.id);
    if (!exercise) return res.status(404).json({ msg: "not found" });

    // make sure user owns excersize
    if (exercise.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "go away" });
    }

    await Exercise.findByIdAndRemove(req.params.id);

    res.json({ msg: "exercise removed" });
  } catch (err) {
    console.log(er.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
