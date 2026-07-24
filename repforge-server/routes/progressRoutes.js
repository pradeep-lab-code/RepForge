const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  completeWorkout,
  getProgress,
  getDashboardProgress,
} = require("../controllers/progressController");

// Complete Workout
router.post("/", protect, completeWorkout);

// Progress History
router.get("/", protect, getProgress);

// Dashboard
router.get("/dashboard", protect, getDashboardProgress);

module.exports = router;