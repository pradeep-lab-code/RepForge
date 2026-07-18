import {
  Barbell,
  Fire,
  Lightning,
} from "phosphor-react";

const ProfileStats = () => {

  const stats = [
    {
      title: "Workouts Completed",
      value: "128",
      icon: <Barbell size={28} className="text-primary" />,
    },
    {
      title: "Calories Burned",
      value: "24,500 kcal",
      icon: <Fire size={28} className="text-orange-500" />,
    },
    {
      title: "Current Streak",
      value: "18 Days",
      icon: <Lightning size={28} className="text-yellow-500" />,
    },
  ];

  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Fitness Statistics
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-surface border border-border rounded-2xl p-6"
          >

            {item.icon}

            <p className="text-text-secondary text-sm mt-3">
              {item.title}
            </p>

            <h3 className="text-2xl font-bold text-text-primary mt-2">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ProfileStats;