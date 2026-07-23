const Workout = require("../models/Workout");
const createWorkout = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      difficulty,
      duration,
      exercises,
    } = req.body;

    // Validation
    if (!name || !category || !difficulty || !duration) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    // Create Workout
    const workout = await Workout.create({
      name,
      description,
      category,
      difficulty,
      duration,
      exercises,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      message: "Workout Created Successfully",
      workout,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().populate(
      "createdBy",
      "name email"
    );

    res.status(200).json(workouts);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Single Workout
const getWorkout = async (req, res) => {
  try {
   const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Workout
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    if (workout.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedWorkout);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
  try {
   const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    if (workout.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await workout.deleteOne();

    res.status(200).json({
      message: "Workout Deleted Successfully",
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};