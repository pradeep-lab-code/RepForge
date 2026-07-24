const express = require("express");

const router = express.Router();

const {
  getProfile,
  updateProfile,
  saveWorkout,
  unsaveWorkout,
  getSavedWorkouts,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Profile
router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

// Saved Workouts
router.post("/save/:workoutId", protect, saveWorkout);

router.delete("/save/:workoutId", protect, unsaveWorkout);

router.get("/saved", protect, getSavedWorkouts);

module.exports = router;