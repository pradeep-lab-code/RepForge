import {
  Barbell,
  Clock,
  Fire,
  Lightning,
} from "phosphor-react";

import Button from "./Button";

const WorkoutCard = ({
  title,
  description,
  level,
  exercises,
  duration,
  calories,
}) => {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6 flex flex-col h-full hover:border-primary transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-bold text-text-primary">
            {title}
          </h2>

          <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            {level}
          </span>

        </div>

        <Barbell
          size={34}
          className="text-primary"
        />

      </div>

      {/* Description */}

      <p className="text-text-secondary mt-5">
        {description}
      </p>

      {/* Info */}

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">

          <div className="flex items-center gap-2">

            <Clock
              size={18}
              className="text-primary"
            />

            <span className="text-text-secondary">
              Duration
            </span>

          </div>

          <span className="font-semibold text-text-primary">
            {duration}
          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex items-center gap-2">

            <Lightning
              size={18}
              className="text-yellow-500"
            />

            <span className="text-text-secondary">
              Exercises
            </span>

          </div>

          <span className="font-semibold text-text-primary">
            {exercises}
          </span>

        </div>

        <div className="flex justify-between">

          <div className="flex items-center gap-2">

            <Fire
              size={18}
              className="text-orange-500"
            />

            <span className="text-text-secondary">
              Calories
            </span>

          </div>

          <span className="font-semibold text-text-primary">
            ~{calories} kcal
          </span>

        </div>

      </div>

      <div className="mt-auto pt-8">

        <Button>

         View Details
        </Button>

      </div>

    </div>
  );
};

export default WorkoutCard;