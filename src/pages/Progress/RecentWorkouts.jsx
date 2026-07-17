import { Clock, Fire } from "phosphor-react";

const recentWorkouts = [
  {
    title: "Chest Workout",
    duration: "45 min",
    calories: 320,
  },
  {
    title: "Back Workout",
    duration: "60 min",
    calories: 420,
  },
  {
    title: "Leg Workout",
    duration: "75 min",
    calories: 540,
  },
];

const RecentWorkouts = () => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Recent Workouts
      </h2>

      <div className="space-y-4">

        {recentWorkouts.map((workout) => (

          <div
            key={workout.title}
            className="bg-surface border border-border rounded-2xl p-5 flex justify-between items-center"
          >

            <div>

              <h3 className="text-lg font-semibold text-text-primary">
                {workout.title}
              </h3>

              <div className="flex gap-5 mt-2">

                <span className="flex items-center gap-2 text-text-secondary">

                  <Clock size={18} />

                  {workout.duration}

                </span>

                <span className="flex items-center gap-2 text-text-secondary">

                  <Fire size={18} />

                  {workout.calories} kcal

                </span>

              </div>

            </div>

            <span className="bg-green-500/20 text-green-500 px-4 py-2 rounded-full font-medium">
              Completed
            </span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecentWorkouts;