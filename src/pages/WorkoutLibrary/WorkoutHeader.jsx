import SearchBar from "../../components/common/SearchBar";

const WorkoutHeader = () => {
  return (
    <section className="space-y-6">

      <p className="text-text-secondary max-w-2xl leading-7">
        Explore hundreds of workouts designed for every fitness level.
        Filter by muscle group, difficulty, or duration to find the
        perfect routine.
      </p>

      <SearchBar />

    </section>
  );
};

export default WorkoutHeader;