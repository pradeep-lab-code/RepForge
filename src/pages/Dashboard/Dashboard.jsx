import { useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import MobileNavbar from "../../components/common/MobileNavbar";

import Greeting from "../Dashboard/Greeting";
import SearchBar from "../../components/common/SearchBar";
import GoalCard from "../Dashboard/GoalCard";
import WorkoutCard from "../../components/common/WorkoutCard";
import AICoachCard from "../Dashboard/AICoachCard";
import DesktopHeader from "../../components/common/DesktopHeader";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col lg:ml-64">
        {/* force-hidden on mobile, only shows on lg+ */}
        <div className="hidden lg:block">
          <DesktopHeader title="Dashboard" />
        </div>

        <MobileNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="flex-1 p-6">
          <Greeting />

          <div className="mt-6">
            <SearchBar />
          </div>
          <section className="mt-10">
            <GoalCard />
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-text-primary mb-5">
              Recommended Workouts
            </h2>

            {/*Recommended-Scroll-bar*/}
            <div className="max-h-[360px] w-full overflow-y-auto pr-2 space-y-4 lg:space-y-0 lg:grid md:grid-cols-1  gap-6 ">
              <WorkoutCard
                title="Chest Workout"
                description="Helps strengthen chest muscles"
                level="Beginner"
                exercises={6}
                duration="45 min"
                calories={320}
              />

              <WorkoutCard
                title="Back Workout"
                description="Helps improve back muscles"
                level="Intermediate"
                exercises={8}
                duration="60 min"
                calories={420}
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-text-primary mb-5">
              Generate Workout through AI
            </h2>
            <AICoachCard />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
