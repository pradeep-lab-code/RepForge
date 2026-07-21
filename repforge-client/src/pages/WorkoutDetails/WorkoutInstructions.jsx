const WorkoutInstructions = ({ workout }) => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Instructions
      </h2>

      <div className="bg-surface border border-border rounded-2xl p-6">

        <ul className="space-y-3 text-text-secondary">
  {workout.instructions.map((instruction, index) => (
    <li key={index}>• {instruction}</li>
  ))}
</ul>

      </div>

    </section>
  );
};

export default WorkoutInstructions;