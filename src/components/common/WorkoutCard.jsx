import { useState, useEffect } from "react";
import { Heart, X, Barbell, Clock, Fire, Lightning } from "phosphor-react";

import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const WorkoutCard = ({
  id,
  title,
  description,
  level,
  exercises,
  duration,
  calories,
}) => {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSave = () => {
    if (!saved) {
      setSaved(true);
      setShowPopup(true);

      // Backend:
      // await axios.post("/api/saved-workouts", { workoutId: id });
    } else {
      setSaved(false);

      // Backend:
      // await axios.delete(`/api/saved-workouts/${id}`);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col h-full hover:border-primary transition-all duration-300">
        {/* Header */}

        <div className="flex justify-between items-start">
          <div>
            <div className="flex gap-3 items-center">
               <h2 className="text-xl font-bold text-text-primary">{title}</h2>
            <Barbell size={34} className="text-primary" />
            </div>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              {level}
            </span>
          </div>

         
            <button
              onClick={handleSave}
              className="transition-all duration-300 hover:scale-110"
            >
              <Heart
                size={26}
                weight={saved ? "fill" : "regular"}
                className={`transition-all duration-300 ${
                  saved
                    ? "text-red-500"
                    : "text-text-secondary hover:text-red-500"
                }`}
              />
            </button>
         
        </div>

        {/* Description */}

        <p className="text-text-secondary mt-5">{description}</p>

        {/* Info */}

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />

              <span className="text-text-secondary">Duration</span>
            </div>

            <span className="font-semibold text-text-primary">{duration}</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Lightning size={18} className="text-yellow-500" />

              <span className="text-text-secondary">Exercises</span>
            </div>

            <span className="font-semibold text-text-primary">
              {Array.isArray(exercises)
                ? `${exercises.length} Exercises`
                : `${exercises} Exercises`}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Fire size={18} className="text-orange-500" />

              <span className="text-text-secondary">Calories</span>
            </div>

            <span className="font-semibold text-text-primary">
              ~{calories} kcal
            </span>
          </div>
        </div>

        {/* Button */}

        <div className="mt-auto pt-8">
          <Link to={`/workouts/${id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>

      {/* Save Popup */}

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="relative bg-surface border border-border rounded-2xl shadow-xl p-6 w-[360px]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4"
            >
              <X
                size={20}
                className="text-text-secondary hover:text-text-primary"
              />
            </button>

            <div className="flex items-center gap-2">
              <Heart size={28} weight="fill" className="text-red-500" />

              <h2 className="text-xl font-bold text-text-primary">
                Workout Saved!
              </h2>
            </div>

            <p className="text-text-secondary mt-3">
              This workout has been added to your saved workouts.
            </p>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setShowPopup(false)}
                variant="outline"
                className="flex-1 h-11 rounded-xl border border-border text-text-primary hover:bg-primary hover:text-white transition"
              >
                Continue
              </Button>

              <Button
                className="flex-1"
                onClick={() => navigate("/saved-workouts")}
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

export default WorkoutCard;
