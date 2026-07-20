import { useState } from "react";
import { Heart, Trash, ArrowRight, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const SavedWorkoutCard = ({ workout }) => {
  const navigate = useNavigate();

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDelete = () => {
    // Backend delete will come here
    console.log("Delete workout:", workout.id);

    setShowDeletePopup(false);
  };

  return (
    <>
      <div className="bg-surface border border-border rounded-2xl p-6">

        <div className="flex justify-between">

          <div>

            <h2 className="text-xl font-bold text-text-primary">
              {workout.title}
            </h2>

            <p className="text-text-secondary mt-2">
             {workout.category}
            </p>

          </div>

          <Heart
            weight="fill"
            size={24}
            className="text-red-500"
          />

        </div>

        <div className="flex gap-8 mt-6">

          <div>

            <p className="text-text-secondary">
              Duration
            </p>

            <p className="text-text-primary font-semibold">
              {workout.duration}
            </p>

          </div>

          <div>

            <p className="text-text-secondary">
              Exercises
            </p>

            <p className="text-text-primary font-semibold">
             {workout.exercises.length}
            </p>

          </div>

        </div>

        <div className="flex gap-3 mt-8">

          {/* Open */}

          <button
            onClick={() =>navigate(`/workouts/${workout.id}`)}
            className="flex-1 bg-primary rounded-xl h-12 text-white font-semibold flex justify-center items-center gap-2 hover:opacity-90 transition"
          >
            Open
            <ArrowRight size={18} />
          </button>

          {/* Delete */}

          <button
            onClick={() => setShowDeletePopup(true)}
            className="w-12 h-12 rounded-xl border border-red-500 text-red-500 flex justify-center items-center hover:bg-red-500 hover:text-white transition"
          >
            <Trash size={20} />
          </button>

        </div>

      </div>

      {/* Delete Popup */}

      {showDeletePopup && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="relative bg-surface border border-border rounded-2xl shadow-xl p-6 w-[360px]">

            {/* Close */}

            <button
              onClick={() => setShowDeletePopup(false)}
              className="absolute top-4 right-4"
            >
              <X
                size={20}
                className="text-text-secondary hover:text-text-primary"
              />
            </button>

            <div className="flex items-center gap-2">

              <Trash
                size={24}
                className="text-red-500"
              />

              <h2 className="text-xl font-bold text-text-primary">
                Delete Workout?
              </h2>

            </div>

            <p className="text-text-secondary mt-4">
              Are you sure you want to remove this workout from your saved workouts?
            </p>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => setShowDeletePopup(false)}
                className="flex-1 h-11 rounded-xl border border-border text-text-primary hover:bg-primary hover:text-white transition"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 h-11 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}
    </>
  );
};

export default SavedWorkoutCard;