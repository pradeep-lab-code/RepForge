const User = require("../models/User");
const Workout = require("../models/Workout");
const Progress = require("../models/Progress");

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
    const { name, age, gender, height, weight, goal, profileImage } = req.body;

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
    user.goal = goal || user.goal;
    user.profileImage = profileImage || user.profileImage;
    if (weight !== undefined && weight !== user.weight) {
      user.weightHistory.push({
        weight,
      });

      user.weight = weight;
    }
    

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
      (id) => id.toString() === workoutId,
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
      (id) => id.toString() !== req.params.workoutId,
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
    const user = await User.findById(req.user._id).populate("savedWorkouts");

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

// Get User Progress
const getProgress = async (req, res) => {
  try {
    let progress = await Progress.findOne({
      user: req.user._id,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
      });
    }

    res.status(200).json(progress);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Progress
const updateProgress = async (req, res) => {
  try {
    let progress = await Progress.findOne({
      user: req.user._id,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
      });
    }

    const {
      currentWeight,
      caloriesBurned,
      workoutsCompleted,
      streak,
      weeklyActivity,
      recentWorkouts,
      achievements,
    } = req.body;

    if (currentWeight !== undefined) progress.currentWeight = currentWeight;

    if (caloriesBurned !== undefined) progress.caloriesBurned = caloriesBurned;

    if (workoutsCompleted !== undefined)
      progress.workoutsCompleted = workoutsCompleted;

    if (streak !== undefined) progress.streak = streak;

    if (weeklyActivity) progress.weeklyActivity = weeklyActivity;

    if (recentWorkouts) progress.recentWorkouts = recentWorkouts;

    if (achievements) progress.achievements = achievements;

    await progress.save();

    res.status(200).json({
      message: "Progress Updated Successfully",
      progress,
    });
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Today's Goal
const getTodayGoal = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    res.json(user.todayGoal);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};


// Update Water
const updateWater = async (req, res) => {
  try {

    const { water } = req.body;

    const user = await User.findById(req.user._id);

    user.todayGoal.waterToday += water;

    await user.save();

    res.json(user.todayGoal);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};


// Update Calories
const updateCalories = async (req, res) => {
  try {

    const { calories } = req.body;

    const user = await User.findById(req.user._id);

    user.todayGoal.caloriesToday += calories;

    await user.save();

    res.json(user.todayGoal);

  } catch (error) {

    console.error(error);

    res.status(500).json({
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

  getTodayGoal,
  updateWater,
  updateCalories,
};
