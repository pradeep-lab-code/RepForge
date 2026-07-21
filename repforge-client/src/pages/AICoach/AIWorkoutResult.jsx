import { useState } from "react";
import { Heart, Barbell, Fire, HouseLine, Timer, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

const AIWorkoutResult = ({ workout }) => {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setShowPopup(true);
  };

  return (
    <>
      <section className="mt-10 bg-surface border border-border rounded-2xl p-6 relative">
        {/* Save Button */}

        <button onClick={handleSave} className="absolute top-6 right-6">
          <Heart
            size={28}
            weight={saved ? "fill" : "regular"}
            className={`transition-all duration-300 ${
              saved ? "text-red-500" : "text-text-secondary hover:text-red-500"
            }`}
          />
        </button>

        <h2 className="text-2xl font-bold text-text-primary">
          Generated Workout
        </h2>

        <div className="mt-6">
          <h3 className="text-3xl font-bold text-primary">{workout.title}</h3>

          {/* Badges */}

          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full flex items-center gap-2">
              <Fire size={18} className="text-orange-500" />
              {workout.goal}
            </span>

            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full flex items-center gap-2">
              <Barbell size={18} />
              {workout.targetMuscle}
            </span>

            <span className="bg-tertiary/10 text-tertiary px-4 py-2 rounded-full flex items-center gap-2">
              <HouseLine size={18} />
              {workout.equipment}
            </span>

            <span className="bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full flex items-center gap-2">
              <Timer size={18} />
              {workout.duration} mins
            </span>
          </div>
        </div>

        {/* Exercises */}

        <div className="mt-10 space-y-4">
          {workout.exercises.map((exercise) => (
            <div
              key={exercise.name}
              className="bg-background border border-border rounded-xl p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <Barbell size={20} className="text-primary" />

                <span className="text-text-primary font-medium">
                  {exercise.name}
                </span>
              </div>

              <span className="text-text-secondary font-medium">
                {exercise.sets} × {exercise.reps}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="relative bg-surface border border-border rounded-2xl shadow-xl p-6 w-[360px]">
            {/* Close */}

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4"
            >
              <X
                size={22}
                className="text-text-secondary hover:text-text-primary"
              />
            </button>

            <div className="flex items-center gap-2">
              <Heart size={28} weight="fill" className="text-red-500" />

              <h3 className="text-xl font-bold text-text-primary">
                Workout Saved!
              </h3>
            </div>

            <p className="text-text-secondary mt-3">
              Your workout has been successfully added to your saved workouts.
            </p>

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowPopup(false)}
                className="flex-1"
              >
                Continue
              </Button>

              <Button
                onClick={() => navigate("/saved-workouts")}
                className="flex-1"
              >
                View Saved
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIWorkoutResult;
