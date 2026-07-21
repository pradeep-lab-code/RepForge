import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import { PencilSimple, SignOut } from "phosphor-react";

const ProfileActions = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-text-primary mb-5">Account</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <Link className="flex-1" to="/profile/edit">
          <Button className="flex items-center justify-center gap-2">
            <PencilSimple size={20} />
            Edit Profile
          </Button>
        </Link>

        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all">
          <SignOut size={20} />
          Logout
        </button>
      </div>
    </section>
  );
};

export default ProfileActions;
