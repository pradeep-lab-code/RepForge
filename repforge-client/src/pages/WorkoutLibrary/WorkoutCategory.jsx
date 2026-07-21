import {
  Barbell,
  PersonSimpleRun,
  Lightning,
  Heartbeat,
  Person,
  Fire,
  Globe,
} from "phosphor-react";

const categories = [
  { name: "All", icon: <Globe size={22} /> },
  { name: "Chest", icon: <Barbell size={22} /> },
  { name: "Back", icon: <Person size={22} /> },
  { name: "Legs", icon: <PersonSimpleRun size={22} /> },
  { name: "Shoulders", icon: <Lightning size={22} /> },
  { name: "Arms", icon: <Fire size={22} /> },
  { name: "Cardio", icon: <Heartbeat size={22} /> },
];

const WorkoutCategory = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4">

        {categories.map((category) => (

          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`rounded-2xl p-5 flex flex-col items-center gap-3 border transition-all duration-300

            ${
              selectedCategory === category.name
                ? "bg-primary border-primary text-white"
                : "bg-surface border-border hover:border-primary hover:bg-primary/10"
            }`}
          >

            {category.icon && (
              <div
                className={
                  selectedCategory === category.name
                    ? "text-white"
                    : "text-primary"
                }
              >
                {category.icon}
              </div>
            )}

            <span
              className={
                selectedCategory === category.name
                  ? "font-semibold text-white"
                  : "font-medium text-text-primary"
              }
            >
              {category.name}
            </span>

          </button>

        ))}

      </div>
    </section>
  );
};

export default WorkoutCategory;