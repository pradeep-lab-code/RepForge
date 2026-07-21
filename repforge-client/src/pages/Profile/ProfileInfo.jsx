import {
  Ruler,
  Barbell,
  Calendar,
  Target,
} from "phosphor-react";

const ProfileInfo = () => {
  const profile = [
    {
      title: "Height",
      value: "178 cm",
      icon: <Ruler size={28} className="text-primary" />,
    },
    {
      title: "Weight",
      value: "72 kg",
      icon: <Barbell size={28} className="text-orange-500" />,
    },
    {
      title: "Age",
      value: "22 Years",
      icon: <Calendar size={28} className="text-green-500" />,
    },
    {
      title: "Goal",
      value: "Muscle Gain",
      icon: <Target size={28} className="text-purple-500" />,
    },
  ];

  return (
    <section className="mt-10">

      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Personal Information
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        {profile.map((item) => (
          <div
            key={item.title}
            className="bg-surface border border-border rounded-2xl p-5"
          >

            {item.icon}

            <p className="text-text-secondary text-sm mt-3">
              {item.title}
            </p>

            <h3 className="text-xl font-bold text-text-primary mt-1">
              {item.value}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ProfileInfo;