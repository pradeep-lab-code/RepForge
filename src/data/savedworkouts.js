import chestworkout from "../assets/images/chestworkout.png";
import backworkout from "../assets/images/backworkout.png";

export const savedWorkouts = [
  {
    id: 101,
    title: "Chest Workout",
    category: "Chest",
    image: chestworkout,
    description:
      "Build a stronger and wider chest using compound and isolation exercises.",
    level: "Beginner",
    duration: "45 min",
    calories: 320,
    saved: true,

    equipments: [
      "Barbell",
      "Bench",
      "Dumbbells",
    ],

    instructions: [
      "Warm up for 5-10 minutes.",
      "Focus on controlled movement.",
      "Rest 60-90 seconds between sets.",
      "Stretch after workout.",
    ],

    exercises: [
      { name: "Bench Press", sets: 4, reps: 12 },
      { name: "Incline Dumbbell Press", sets: 3, reps: 10 },
      { name: "Chest Fly", sets: 3, reps: 12 },
      { name: "Push Ups", sets: 3, reps: 15 },
    ],
  },

  {
    id: 102,
    title: "AI Strength Builder",
    category: "AI Generated",
    description:
      "AI generated workout focused on increasing upper body strength.",
    level: "AI Generated",
    duration: "50 min",
    calories: 370,
    saved: true,

    equipments: [
      "Barbell",
      "Bench",
      "Cable Machine",
    ],

    instructions: [
      "Warm up for 5 minutes.",
      "Maintain proper form.",
      "Rest 90 seconds between sets.",
      "Finish with stretching.",
    ],

    exercises: [
      { name: "Bench Press", sets: 4, reps: 8 },
      { name: "Incline Dumbbell Press", sets: 3, reps: 10 },
      { name: "Cable Fly", sets: 3, reps: 12 },
      { name: "Dips", sets: 3, reps: 12 },
    ],
  },

  {
    id: 103,
    title: "Back Workout",
    category: "Back",
    image: backworkout,
    description:
      "Strengthen your back and improve posture.",
    level: "Intermediate",
    duration: "60 min",
    calories: 420,
    saved: true,

    equipments: [
      "Pull Up Bar",
      "Cable Machine",
      "Barbell",
    ],

    instructions: [
      "Keep your back straight.",
      "Squeeze shoulder blades.",
      "Avoid swinging.",
      "Stretch after workout.",
    ],

    exercises: [
      { name: "Pull Ups", sets: 4, reps: 10 },
      { name: "Lat Pulldown", sets: 3, reps: 12 },
      { name: "Barbell Row", sets: 4, reps: 10 },
      { name: "Cable Row", sets: 3, reps: 12 },
    ],
  },
];