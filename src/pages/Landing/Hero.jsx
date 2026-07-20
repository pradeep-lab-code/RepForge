import { Link } from "react-router-dom";
import { Barbell, ChartBar, Sparkle } from "phosphor-react";
import Button from "../../components/common/Button";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
          <Sparkle size={18} />
          AI Powered Fitness Platform
        </span>

        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-6">
          Forge Your
          <span className="text-primary"> Dream Physique </span>
          with AI
        </h1>

        <p className="text-text-secondary text-lg mt-6 leading-8 max-w-xl">
          RepForge helps you generate personalized workouts,
          track your progress, save routines and stay consistent
          with an AI powered fitness experience.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link to="/signup" className="w-50">
            <Button className="w-40">
              Get Started
            </Button>
          </Link>

          <Link to="/workouts" className="w-44">
            <Button
              variant="outline"
              
            >
              Explore Workouts
            </Button>
          </Link>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-6 mt-14">

          <div>
            <h2 className="text-3xl font-bold text-primary">
              100+
            </h2>

            <p className="text-text-secondary mt-2">
              Exercises
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">
              AI
            </h2>

            <p className="text-text-secondary mt-2">
              Workout Generator
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">
              24/7
            </h2>

            <p className="text-text-secondary mt-2">
              Progress Tracking
            </p>
          </div>

        </div>

      </div>

      {/* Right */}

      <div className="relative">

        <div className="bg-surface border border-border rounded-3xl p-8 shadow-xl">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              Today's Workout
            </h2>

            <Barbell
              size={34}
              className="text-primary"
            />

          </div>

          <div className="mt-8 space-y-5">

            {[
              "Bench Press",
              "Incline Dumbbell Press",
              "Chest Fly",
              "Push Ups",
            ].map((exercise) => (
              <div
                key={exercise}
                className="flex justify-between items-center bg-background rounded-xl p-4"
              >
                <span>{exercise}</span>

                <span className="text-primary">
                  4 × 12
                </span>

              </div>
            ))}

          </div>

          <div className="mt-8 bg-primary rounded-2xl p-5 flex items-center justify-between">

            <div>

              <p className="text-white/80">
                Weekly Progress
              </p>

              <h2 className="text-white text-3xl font-bold">
                82%
              </h2>

            </div>

            <ChartBar
              size={42}
              weight="fill"
              className="text-white"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;