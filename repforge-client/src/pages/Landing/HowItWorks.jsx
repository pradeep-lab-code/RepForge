import {
  UserCirclePlus,
  Sparkle,
  Barbell,
  ChartBar,
} from "phosphor-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCirclePlus,
      title: "Create Your Account",
      description:
        "Sign up in seconds and tell RepForge about your fitness goals.",
    },
    {
      icon: Sparkle,
      title: "Generate AI Workout",
      description:
        "Our AI builds a personalized workout plan based on your preferences.",
    },
    {
      icon: Barbell,
      title: "Train Consistently",
      description:
        "Complete your workouts, save favourites and stay on track every day.",
    },
    {
      icon: ChartBar,
      title: "Track Your Progress",
      description:
        "Monitor weight, workouts completed and achievements as you improve.",
    },
  ];

  return (
    <section
      id="how"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">

        <span className="text-primary font-semibold uppercase tracking-wider">
          How It Works
        </span>

        <h2 className="text-4xl font-bold mt-3">
          Reach Your Goals In 4 Simple Steps
        </h2>

        <p className="text-text-secondary mt-5 max-w-2xl mx-auto leading-8">
          Getting started with RepForge takes only a few minutes.
          Let AI handle the planning while you focus on training.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative bg-surface border border-border rounded-2xl p-8 text-center hover:border-primary transition-all duration-300"
            >

              {/* Step Number */}

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mt-4">

                <Icon
                  size={34}
                  weight="fill"
                  className="text-primary"
                />

              </div>

              <h3 className="text-xl font-bold mt-6">
                {step.title}
              </h3>

              <p className="text-text-secondary mt-4 leading-7">
                {step.description}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default HowItWorks;