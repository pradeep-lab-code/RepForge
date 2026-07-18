import { useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import DesktopHeader from "../../components/common/DesktopHeader";
import MobileNavbar from "../../components/common/MobileNavbar";
import EditProfileHeader from "./EditProfileHeader";
import ProfileForm from "./ProfileForm";
import SaveActions from "./SaveActions";

const EditProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col lg:ml-64">
        <DesktopHeader title="Edit Profile" />

        <MobileNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-6">
          <EditProfileHeader />

          <ProfileForm />

          <SaveActions />
        </main>
      </div>
    </div>
  );
};

export default EditProfile;
