import chestworkout from "../assets/images/chestworkout.png";
import backworkout from "../assets/images/backworkout.png";
import legsworkout from "../assets/images/legsworkout.png";
import shouldersworkout from "../assets/images/shoulders.png";
import armsworkout from "../assets/images/armsworkout.png";
import cardioworkout from "../assets/images/cardio.png";

export const workouts = [
  {
    id: 1,
    title: "Chest Workout",
    category: "Chest",
    image: chestworkout,
    description: "Build a stronger and wider chest using compound and isolation exercises.",
    level: "Beginner",
    duration: "45 min",
    calories: 320,

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
    id: 2,
    title: "Back Workout",
    category: "Back",
    image: backworkout,
    description: "Strengthen your back and improve posture.",
    level: "Intermediate",
    duration: "60 min",
    calories: 420,

    equipments: [
      "Pull Up Bar",
      "Cable Machine",
      "Barbell",
    ],

    instructions: [
      "Keep your back straight.",
      "Squeeze shoulder blades together.",
      "Don't swing during pull-ups.",
      "Stretch lats after workout.",
    ],

    exercises: [
      { name: "Pull Ups", sets: 4, reps: 10 },
      { name: "Lat Pulldown", sets: 3, reps: 12 },
      { name: "Barbell Row", sets: 4, reps: 10 },
      { name: "Seated Cable Row", sets: 3, reps: 12 },
    ],
  },

  {
    id: 3,
    title: "Leg Workout",
    category: "Legs",
    image: legsworkout,
    description: "Develop stronger legs with compound lower body movements.",
    level: "Advanced",
    duration: "75 min",
    calories: 540,

    equipments: [
      "Barbell",
      "Leg Press",
      "Dumbbells",
    ],

    instructions: [
      "Keep knees aligned.",
      "Go through full range of motion.",
      "Brace your core.",
      "Cool down after workout.",
    ],

    exercises: [
      { name: "Barbell Squat", sets: 4, reps: 10 },
      { name: "Romanian Deadlift", sets: 4, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 12 },
      { name: "Walking Lunges", sets: 3, reps: 14 },
    ],
  },

  {
    id: 4,
    title: "Shoulder Workout",
    category: "Shoulders",
    image: shouldersworkout,
    description: "Build wider and stronger shoulders.",
    level: "Intermediate",
    duration: "50 min",
    calories: 360,

    equipments: [
      "Dumbbells",
      "Cable Machine",
    ],

    instructions: [
      "Avoid shrugging shoulders.",
      "Control the weight.",
      "Focus on shoulder activation.",
      "Stretch after training.",
    ],

    exercises: [
      { name: "Overhead Press", sets: 4, reps: 10 },
      { name: "Lateral Raise", sets: 3, reps: 15 },
      { name: "Front Raise", sets: 3, reps: 12 },
      { name: "Face Pull", sets: 3, reps: 15 },
    ],
  },

  {
    id: 5,
    title: "Arm Workout",
    category: "Arms",
    image: armsworkout,
    description: "Increase arm size and strength with biceps and triceps exercises.",
    level: "Beginner",
    duration: "35 min",
    calories: 250,

    equipments: [
      "EZ Bar",
      "Dumbbells",
    ],

    instructions: [
      "Keep elbows fixed.",
      "Avoid swinging.",
      "Use full range of motion.",
      "Stretch biceps and triceps.",
    ],

    exercises: [
      { name: "Barbell Curl", sets: 4, reps: 12 },
      { name: "Hammer Curl", sets: 3, reps: 12 },
      { name: "Tricep Pushdown", sets: 3, reps: 15 },
      { name: "Overhead Extension", sets: 3, reps: 12 },
    ],
  },

  {
    id: 6,
    title: "Cardio Session",
    category: "Cardio",
    image: cardioworkout,
    description: "Improve endurance and burn calories.",
    level: "All Levels",
    duration: "30 min",
    calories: 280,

    equipments: [
      "Treadmill",
      "Jump Rope",
    ],

    instructions: [
      "Maintain steady breathing.",
      "Stay hydrated.",
      "Start slow.",
      "Cool down properly.",
    ],

    exercises: [
      { name: "Jogging", sets: 1, reps: "15 min" },
      { name: "Jump Rope", sets: 3, reps: "2 min" },
      { name: "Burpees", sets: 3, reps: 15 },
      { name: "Mountain Climbers", sets: 3, reps: 20 },
    ],
  },
];

export const recommendedWorkouts = workouts.slice(0, 3);

export const popularWorkouts = workouts.slice(3);