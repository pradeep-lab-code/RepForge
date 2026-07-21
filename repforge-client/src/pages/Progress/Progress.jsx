import { useState } from "react";
import { ChartBar } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/common/Sidebar";
import DesktopHeader from "../../components/common/DesktopHeader";
import MobileNavbar from "../../components/common/MobileNavbar";
import EmptyState from "../../components/common/EmptyState";

import ProgressHeader from "./ProgressHeader";
import StatsCards from "./StatsCard";
import WeightProgress from "./WeightProgress";
import WeeklyActivity from "./WeeklyActivity";
import RecentWorkouts from "./RecentWorkouts";
import Achievements from "./Achievements";

const Progress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // Replace with backend progress data
  const hasProgress = true;

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

          {!hasProgress ? (
            <EmptyState
              icon={<ChartBar size={70} weight="duotone" />}
              title="No Progress Yet"
              description="Complete your first workout to unlock your fitness insights."
              buttonText="Explore Workouts"
              onClick={() => navigate("/workouts")}
            />
          ) : (
            <>
              <ProgressHeader />

              <StatsCards />

              <WeightProgress />

              <WeeklyActivity />

              <RecentWorkouts />

              <Achievements />
            </>
          )}

        </main>
      </div>
    </div>
  );
};

export default Progress;