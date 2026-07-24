const express = require("express");

const router = express.Router();

const {
  getProfile,
  updateProfile,
  saveWorkout,
  unsaveWorkout,
  getSavedWorkouts,
  getTodayGoal,
updateWater,
updateCalories,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Profile
router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.post("/save/:workoutId", protect, saveWorkout);

router.delete("/save/:workoutId", protect, unsaveWorkout);

router.get("/saved", protect, getSavedWorkouts);
router.get("/today-goal", protect, getTodayGoal);

router.put("/water", protect, updateWater);

router.put("/calories", protect, updateCalories);


module.exports = router;