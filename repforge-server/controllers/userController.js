const User = require("../models/User");
const Workout = require("../models/Workout");

// Get Profile
const getProfile = async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Profile
const updateProfile = async (req, res) => {
  try {
    const { name, age, gender, height, weight, goal, profileImage } =
      req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    user.name = name || user.name;
    user.age = age || user.age;
    user.gender = gender || user.gender;
    user.height = height || user.height;
    user.weight = weight || user.weight;
    user.goal = goal || user.goal;
    user.profileImage = profileImage || user.profileImage;

    const updatedUser = await user.save();

    return res.status(200).json({
      message: "Profile Updated Successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Save Workout
const saveWorkout = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const workoutId = req.params.workoutId;

    const workout = await Workout.findById(workoutId);

    if (!workout) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    const alreadySaved = user.savedWorkouts.some(
      (id) => id.toString() === workoutId
    );

    if (alreadySaved) {
      return res.status(400).json({
        message: "Workout Already Saved",
      });
    }

    user.savedWorkouts.push(workoutId);

    await user.save();

    return res.status(200).json({
      message: "Workout Saved Successfully",
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Remove Saved Workout
const unsaveWorkout = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.savedWorkouts = user.savedWorkouts.filter(
      (id) => id.toString() !== req.params.workoutId
    );

    await user.save();

    return res.status(200).json({
      message: "Workout Removed Successfully",
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Saved Workouts
const getSavedWorkouts = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "savedWorkouts"
    );

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    return res.status(200).json(user.savedWorkouts);
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
  saveWorkout,
  unsaveWorkout,
  getSavedWorkouts,
};