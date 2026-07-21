import { FloppyDisk, X } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const SaveActions = () => {

  const navigate = useNavigate();

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (

    <section className="mt-10">

      <div className="flex justify-end gap-4">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-surface text-text-primary hover:bg-background transition"
        >

          <X size={20} />

          Cancel

        </button>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition"
        >

          <FloppyDisk size={20} />

          Save Changes

        </button>

      </div>

    </section>

  );
};

export default SaveActions;