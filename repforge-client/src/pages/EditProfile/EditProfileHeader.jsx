import { PencilSimple } from "phosphor-react";

const EditProfileHeader = () => {
  return (
    <section>

      <div className="flex items-center gap-3">

        <div className="bg-primary/10 p-3 rounded-xl">

          <PencilSimple
            size={28}
            className="text-primary"
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-text-primary">
            Edit Profile
          </h1>

          <p className="text-text-secondary mt-1">
            Update your personal and fitness information.
          </p>

        </div>

      </div>

    </section>
  );
};

export default EditProfileHeader;