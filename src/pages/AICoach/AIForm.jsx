import { useState } from "react";
import Button from "../../components/common/Button";

const AIForm = ({ setGeneratedWorkout }) => {
  const [goal, setGoal] = useState("Build Muscle");
  const [targetMuscle, setTargetMuscle] = useState("Chest");
  const [level, setLevel] = useState("Beginner");
  const [duration, setDuration] = useState("60");
  const [equipment, setEquipment] = useState("Gym");

  const handleGenerate = () => {
    const workout = {
      title: `${targetMuscle} Workout`,
      goal,
      targetMuscle,
      level,
      duration,
      equipment,

      exercises: [
        {
          name: "Bench Press",
          sets: 4,
          reps: 10,
        },
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: 12,
        },
        {
          name: "Chest Fly",
          sets: 3,
          reps: 15,
        },
        {
          name: "Push Ups",
          sets: 3,
          reps: "Failure",
        },
      ],
    };

    setGeneratedWorkout(workout);
  };

  return (
    <section className="bg-surface border border-border rounded-2xl p-6">

      <h1 className="text-3xl font-bold text-text-primary">
        AI Workout Generator
      </h1>

      <p className="text-text-secondary mt-2">
        Generate a personalized workout based on your fitness goals.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Goal */}

        <div>

          <label className="text-text-primary font-medium">
            Goal
          </label>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full mt-2 bg-background border border-border rounded-xl p-3 text-text-primary"
          >
            <option>Build Muscle</option>
            <option>Lose Weight</option>
            <option>Gain Strength</option>
          </select>

        </div>

        {/* Target Muscle */}

        <div>

          <label className="text-text-primary font-medium">
            Target Muscle
          </label>

          <select
            value={targetMuscle}
            onChange={(e) => setTargetMuscle(e.target.value)}
            className="w-full mt-2 bg-background border border-border rounded-xl p-3 text-text-primary"
          >
            <option>Chest</option>
            <option>Back</option>
            <option>Shoulders</option>
            <option>Legs</option>
            <option>Arms</option>
            <option>Core</option>
            <option>Full Body</option>
            <option>Cardio</option>
          </select>

        </div>

        {/* Experience */}

        <div>

          <label className="text-text-primary font-medium">
            Experience
          </label>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full mt-2 bg-background border border-border rounded-xl p-3 text-text-primary"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

        </div>

        {/* Equipment */}

        <div>

          <label className="text-text-primary font-medium">
            Equipment
          </label>

          <select
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="w-full mt-2 bg-background border border-border rounded-xl p-3 text-text-primary"
          >
            <option>Gym</option>
            <option>Home</option>
            <option>Bodyweight</option>
          </select>

        </div>

        {/* Duration */}

        <div className="md:col-span-2">

          <label className="text-text-primary font-medium">
            Workout Duration
          </label>

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full mt-2 bg-background border border-border rounded-xl p-3 text-text-primary"
          >
            <option>30</option>
            <option>45</option>
            <option>60</option>
            <option>90</option>
          </select>

        </div>

      </div>

      <div className="mt-8">

        <Button onClick={handleGenerate}>
          Generate Workout
        </Button>

      </div>

    </section>
  );
};

export default AIForm;