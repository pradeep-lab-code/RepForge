const Progress = require("../models/Progress");
const Workout = require("../models/Workout");
const User = require("../models/User");

// Complete Workout
const completeWorkout = async (req, res) => {
  try {
    const { workout, caloriesBurned, duration } = req.body;
    const user = await User.findById(req.user._id);

user.todayGoal.caloriesToday += caloriesBurned || 0;

await user.save();

    if (!workout) {
      return res.status(400).json({
        message: "Workout ID is required",
      });
    }

    const workoutExists = await Workout.findById(workout);

    if (!workoutExists) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    const progress = await Progress.create({
      user: req.user._id,
      workout,
      caloriesBurned,
      duration,
    });

    return res.status(201).json({
      message: "Workout Completed Successfully",
      progress,
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Progress History
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({
      user: req.user._id,
    })
      .populate("workout")
      .sort({ createdAt: -1 });

    return res.status(200).json(progress);
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// Dashboard Progress
const getDashboardProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const progress = await Progress.find({
      user: req.user._id,
    })
      .populate("workout")
      .sort({ createdAt: -1 });

    const workoutsCompleted = progress.length;

    const caloriesBurned = progress.reduce(
      (sum, item) => sum + (item.caloriesBurned || 0),
      0
    );

    const recent = progress.slice(0, 5).map((item) => ({
      name: item.workout?.name,
      duration: item.duration,
      calories: item.caloriesBurned,
      status: "Completed",
    }));

    const weekly = [
      { day: "Mon", count: 0 },
      { day: "Tue", count: 0 },
      { day: "Wed", count: 0 },
      { day: "Thu", count: 0 },
      { day: "Fri", count: 0 },
      { day: "Sat", count: 0 },
      { day: "Sun", count: 0 },
    ];

    progress.forEach((item) => {
      const day = new Date(item.createdAt).getDay();

      const map = [6, 0, 1, 2, 3, 4, 5];

      weekly[map[day]].count++;
    });

    return res.status(200).json({
      stats: {
        currentWeight: user.weight,
        caloriesBurned,
        workoutsCompleted,
        streak: workoutsCompleted,
      },

      weekly,

      recent,

      weightHistory: user.weightHistory || [],

      achievements: {
        streak: workoutsCompleted,
        completed: workoutsCompleted,
        calories: caloriesBurned,
      },
    });
  } catch (error) {
    console.error(error.message);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  completeWorkout,
  getProgress,
  getDashboardProgress,
};