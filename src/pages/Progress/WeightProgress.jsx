import { TrendUp } from "phosphor-react";

const weightHistory = [
  { week: "Week 1", weight: 78 },
  { week: "Week 2", weight: 77 },
  { week: "Week 3", weight: 76 },
  { week: "Week 4", weight: 75 },
  { week: "Current", weight: 74 },
];

const WeightProgress = () => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Weight Progress
      </h2>

      <div className="bg-surface border border-border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-6">

          <TrendUp
            size={28}
            className="text-primary"
          />

          <div>

            <h3 className="text-xl font-semibold text-text-primary">
              Weight Journey
            </h3>

            <p className="text-text-secondary">
              Last 5 Updates
            </p>

          </div>

        </div>

        <div className="space-y-5">

          {weightHistory.map((item) => (

            <div
              key={item.week}
              className="flex justify-between items-center"
            >

              <span className="text-text-secondary">
                {item.week}
              </span>

              <div className="flex items-center gap-4">

                <div className="w-48 h-3 rounded-full bg-background overflow-hidden">

                  <div
                    className="h-full bg-primary rounded-full"
                    style={{
                      width: `${item.weight}%`,
                    }}
                  />

                </div>

                <span className="font-semibold text-text-primary w-12 text-right">
                  {item.weight}kg
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WeightProgress;