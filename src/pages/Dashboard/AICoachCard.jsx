import { Sparkle } from "phosphor-react";
import Button from "../../components/common/Button";

const AICoachCard = () => {
  return (
    <div className="bg-surface border border-border rounded-2xl p-6">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold text-text-primary">
            AI Coach
          </h2>

          <p className="text-text-secondary mt-2">
            Generate a personalized workout based on your goals.
          </p>

        </div>

        <Sparkle
          size={34}
          weight="fill"
          className="text-tertiary"
        />

      </div>

      <div className="mt-8">

        <Button>
          Generate Plan
        </Button>

      </div>

    </div>
  );
};

export default AICoachCard;