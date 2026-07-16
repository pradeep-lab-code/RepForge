import { Fire, Drop, Target } from "phosphor-react";

const GoalCard = () => {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6">

      <h2 className="text-xl font-bold text-text-primary">
        Today's Goal
      </h2>

      <p className="text-text-secondary mt-1">
        Keep pushing yourself 💪
      </p>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between mb-2">

          <span className="text-text-primary font-semibold">
            Progress
          </span>

          <span className="text-secondary font-bold">
            80%
          </span>

        </div>

        <div className="w-full h-3 bg-background rounded-full overflow-hidden">

          <div className="w-[80%] h-full bg-secondary rounded-full"></div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="text-center">

          <Fire
            size={24}
            className="mx-auto text-orange-500"
          />

          <p className="text-sm text-text-secondary mt-2">
            Calories
          </p>

          <h3 className="text-text-primary font-bold">
            520
          </h3>

        </div>

        <div className="text-center">

          <Drop
            size={24}
            className="mx-auto text-blue-500"
          />

          <p className="text-sm text-text-secondary mt-2">
            Water
          </p>

          <h3 className="text-text-primary font-bold">
            2.1L
          </h3>

        </div>

        <div className="text-center">

          <Target
            size={24}
            className="mx-auto text-green-500"
          />

          <p className="text-sm text-text-secondary mt-2">
            Goal
          </p>

          <h3 className="text-text-primary font-bold">
            Done
          </h3>

        </div>

      </div>

    </div>
  );
};

export default GoalCard;