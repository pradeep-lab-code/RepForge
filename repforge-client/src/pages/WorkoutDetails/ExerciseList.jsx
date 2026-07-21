import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ workout }) => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Exercises
      </h2>

      <div className="space-y-4">

        {workout.exercises.map((exercise) => (

          <ExerciseCard
            key={exercise.name}
            {...exercise}
          />

        ))}

      </div>

    </section>
  );
};

export default ExerciseList;