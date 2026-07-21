import {
  Trophy,
  Fire,
  Lightning,
} from "phosphor-react";

const achievements = [
  {
    title: "7 Day Streak",
    icon: <Fire size={32} />,
    color: "text-orange-500",
  },
  {
    title: "25 Workouts Completed",
    icon: <Trophy size={32} />,
    color: "text-yellow-500",
  },
  {
    title: "10,000 Calories Burned",
    icon: <Lightning size={32} />,
    color: "text-primary",
  },
];

const Achievements = () => {
  return (
    <section className="mt-10 mb-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {achievements.map((achievement) => (

          <div
            key={achievement.title}
            className="bg-surface border border-border rounded-2xl p-6 text-center hover:border-primary transition-all duration-300"
          >

            <div className={`${achievement.color} flex justify-center mb-4`}>
              {achievement.icon}
            </div>

            <h3 className="text-lg font-semibold text-text-primary">
              {achievement.title}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Achievements;