import {
  Barbell,
  Fire,
  TrendUp,
  Lightning,
} from "phosphor-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Current Weight",
      value: "74 kg",
      icon: <TrendUp size={28} />,
    },
    {
      title: "Calories Burned",
      value: "12,340",
      icon: <Fire size={28} />,
    },
    {
      title: "Workouts",
      value: "36",
      icon: <Barbell size={28} />,
    },
    {
      title: "Streak",
      value: "8 Days",
      icon: <Lightning size={28} />,
    },
  ];

  return (
    <section className="mt-10">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-surface border border-border rounded-2xl p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300"
          >

            <div className="text-primary mb-3">
              {item.icon}
            </div>

            <p className="text-text-secondary text-sm">
              {item.title}
            </p>

            <h3 className="text-2xl font-bold text-text-primary mt-1">
              {item.value}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default StatsCards;