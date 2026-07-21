import { useState } from "react";
import { Camera } from "phosphor-react";

const ProfileForm = () => {
      const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    age: 22,
    gender: "Male",

    height: 178,
    weight: 72,
    targetWeight: 75,

    goal: "Muscle Gain",
    level: "Intermediate",
  });
    const [profileImage, setProfileImage] = useState(
  "https://i.pravatar.cc/150?img=12"
);
const handleImageChange = (e) => {

  const file = e.target.files[0];

  if (file) {
    setProfileImage(URL.createObjectURL(file));
  }

};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="mt-10">
      <div className="bg-surface border border-border rounded-3xl p-8">

        {/* Profile Image */}

        <div className="flex flex-col items-center">

  <img
    src={profileImage}
    alt="Profile"
    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
  />

  <label
    className="mt-5 cursor-pointer bg-primary text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition"
  >

    <Camera size={20} />

    Change Photo

    <input
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleImageChange}
    />

  </label>

</div>

        {/* Form */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Name */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary placeholder:text-text-secondary outline-none focus:border-primary"
            />
          </div>

          {/* Email */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary placeholder:text-text-secondary outline-none focus:border-primary"
            />
          </div>

          {/* Age */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            />
          </div>

          {/* Gender */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Gender
            </label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Height */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Height (cm)
            </label>

            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            />
          </div>

          {/* Weight */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Weight (kg)
            </label>

            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            />
          </div>

          {/* Target Weight */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Target Weight (kg)
            </label>

            <input
              type="number"
              name="targetWeight"
              value={formData.targetWeight}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            />
          </div>

          {/* Goal */}

          <div>
            <label className="block mb-2 text-text-secondary">
              Fitness Goal
            </label>

            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            >
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Strength</option>
              <option>Endurance</option>
              <option>General Fitness</option>
            </select>
          </div>

          {/* Experience */}

          <div className="md:col-span-2">
            <label className="block mb-2 text-text-secondary">
              Experience Level
            </label>

            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-xl p-3 text-text-primary outline-none focus:border-primary"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfileForm;