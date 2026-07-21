import { Barbell } from "phosphor-react";

const WorkoutHero = ({ workout }) => {
  return (
    <section className="bg-surface border border-border rounded-3xl overflow-hidden">

      <img
        src={workout.image}
        alt={workout.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold text-text-primary">
              {workout.title}
            </h1>

            <p className="text-text-secondary mt-2">
              {workout.description}
            </p>

          </div>

          <Barbell
            size={42}
            className="text-primary"
          />

        </div>

        <div className="mt-5 flex items-center gap-3">

          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
            {workout.level}
          </span>

          <span className="bg-background border border-border text-text-secondary px-4 py-2 rounded-full">
            {workout.duration}
          </span>

        </div>

      </div>

    </section>
  );
};

export default WorkoutHero;