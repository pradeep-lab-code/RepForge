import { useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import MobileNavbar from "../../components/common/MobileNavbar";
import DesktopHeader from "../../components/common/DesktopHeader";

import ProgressHeader from "./ProgressHeader";
import StatsCards from "./StatsCard";
import WeightProgress from "./WeightProgress";
import WeeklyActivity from "./WeeklyActivity";
import RecentWorkouts from "./RecentWorkouts";
import Achievements from "./Achievements";

const Progress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col lg:ml-64">

        <DesktopHeader title="Progress" />

        <MobileNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-6">

          <ProgressHeader />

          <StatsCards />

           <WeightProgress />

          <WeeklyActivity />

          <RecentWorkouts />

          <Achievements />

        </main>

      </div>
    </div>
  );
};

export default Progress;