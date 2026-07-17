import {
  Clock,
  Lightning,
  Fire,
  Trophy,
} from "phosphor-react";

const WorkoutInfo = ({ workout }) => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Workout Overview
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-surface border border-border rounded-2xl p-5">

          <Clock
            size={28}
            className="text-primary mb-3"
          />

          <p className="text-text-secondary text-sm">
            Duration
          </p>

          <h3 className="text-xl font-bold text-text-primary mt-1">
            {workout.duration}
          </h3>

        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">

          <Lightning
            size={28}
            className="text-yellow-500 mb-3"
          />

          <p className="text-text-secondary text-sm">
            Exercises
          </p>

          <h3 className="text-xl font-bold text-text-primary mt-1">
            {workout.exercises.length} Exercises
          </h3>

        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">

          <Fire
            size={28}
            className="text-orange-500 mb-3"
          />

          <p className="text-text-secondary text-sm">
            Calories
          </p>

          <h3 className="text-xl font-bold text-text-primary mt-1">
            {workout.calories} kcal
          </h3>

        </div>

        <div className="bg-surface border border-border rounded-2xl p-5">

          <Trophy
            size={28}
            className="text-green-500 mb-3"
          />

          <p className="text-text-secondary text-sm">
            Difficulty
          </p>

          <h3 className="text-xl font-bold text-text-primary mt-1">
            {workout.level}
          </h3>

        </div>

      </div>

    </section>
  );
};

export default WorkoutInfo;