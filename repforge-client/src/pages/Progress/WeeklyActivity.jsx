const activity = [
  { day: "Mon", value: 70 },
  { day: "Tue", value: 90 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 100 },
  { day: "Sat", value: 40 },
  { day: "Sun", value: 75 },
];

const WeeklyActivity = () => {
  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Weekly Activity
      </h2>

      <div className="bg-surface border border-border rounded-2xl p-6">

        <div className="flex items-end justify-between h-60">

          {activity.map((item) => (

            <div
              key={item.day}
              className="flex flex-col items-center gap-3"
            >

              <div
                className="w-10 bg-primary rounded-xl transition-all duration-300"
                style={{
                  height: `${item.value * 2}px`,
                }}
              />

              <span className="text-text-secondary text-sm">
                {item.day}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WeeklyActivity;