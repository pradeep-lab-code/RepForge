const express = require("express");

const router = express.Router();

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createWorkout);

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.put("/:id", protect, updateWorkout);

router.delete("/:id", protect, deleteWorkout);

module.exports = router;