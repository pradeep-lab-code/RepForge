const ExerciseCard = ({ name, sets, reps }) => {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5 flex justify-between items-center">

      <div>

        <h3 className="text-lg font-semibold text-text-primary">
          {name}
        </h3>

        <p className="text-text-secondary">
          {sets} Sets × {reps} Reps
        </p>

      </div>

    </div>
  );
};

export default ExerciseCard;