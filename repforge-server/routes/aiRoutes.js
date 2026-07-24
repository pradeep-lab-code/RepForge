const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  generateWorkout,
} = require("../controllers/aiContoller");

router.post(
  "/generate-workout",
  protect,
  generateWorkout
);

module.exports = router;