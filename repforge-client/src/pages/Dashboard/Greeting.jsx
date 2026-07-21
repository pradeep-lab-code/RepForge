import { Sun } from "phosphor-react";

const Greeting = () => {
  return (
    <div>
      <p className="flex items-center gap-2 text-text-secondary">

        Good Morning

        <Sun
          size={18}
          weight="fill"
          className="text-yellow-500"
        />

      </p>

      <h2 className="text-3xl font-bold text-text-primary mt-2">
        Pradeep 👋
      </h2>
    </div>
  );
};

export default Greeting;