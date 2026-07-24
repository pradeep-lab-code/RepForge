const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    age: {
      type: Number,
      default: null,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: null,
    },

    height: {
      type: Number,
      default: null,
    },

    weight: {
      type: Number,
      default: null,
    },

    goal: {
      type: String,
      enum: ["Weight Loss", "Muscle Gain", "Maintain Fitness"],
      default: null,
    },

    profileImage: {
      type: String,
      default: "",
    },
    savedWorkouts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
      },
    ],
    weightHistory: [
      {
        weight: Number,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    todayGoal: {
  caloriesGoal: {
    type: Number,
    default: 500,
  },

  waterGoal: {
    type: Number,
    default: 3,
  },

  caloriesToday: {
    type: Number,
    default: 0,
  },

  waterToday: {
    type: Number,
    default: 0,
  },
},
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
