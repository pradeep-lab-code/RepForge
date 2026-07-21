import { useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import DesktopHeader from "../../components/common/DesktopHeader";
import MobileNavbar from "../../components/common/MobileNavbar";

import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileStats from "./ProfileStats";
import ProfileActions from "./ProfileActions";

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col lg:ml-64">
        <DesktopHeader title="Profile" />

        <MobileNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-6">
          <ProfileHeader />
          <ProfileInfo />
          <ProfileStats />

          <ProfileActions />
        </main>
      </div>
    </div>
  );
};

export default Profile;
