import {
  Sparkle,
  Barbell,
  ChartBar,
  Heart,
} from "phosphor-react";

const Features = () => {
  const features = [
    {
      icon: Sparkle,
      title: "AI Workout Generator",
      description:
        "Generate personalized workout plans based on your fitness goals, experience level and available equipment.",
    },
    {
      icon: Barbell,
      title: "Workout Library",
      description:
        "Browse professionally designed workout routines for every muscle group and fitness level.",
    },
    {
      icon: ChartBar,
      title: "Track Progress",
      description:
        "Monitor your weight, completed workouts and achievements with interactive progress tracking.",
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description:
        "Save your favourite AI generated and library workouts for quick access anytime.",
    },
  ];

  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">

        <span className="text-primary font-semibold uppercase tracking-wider">
          Features
        </span>

        <h2 className="text-4xl font-bold mt-3">
          Everything You Need To Stay Consistent
        </h2>

        <p className="text-text-secondary mt-5 max-w-2xl mx-auto leading-8">
          RepForge combines AI, workout planning and progress tracking
          into one powerful platform designed to help you achieve your
          fitness goals.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-2xl p-7 hover:border-primary hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">

                <Icon
                  size={30}
                  className="text-primary"
                  weight="fill"
                />

              </div>

              <h3 className="text-xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-text-secondary leading-7 mt-4">
                {feature.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Features;