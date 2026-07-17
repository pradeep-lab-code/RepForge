import { useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import MobileNavbar from "../../components/common/MobileNavbar";
import DesktopHeader from "../../components/common/DesktopHeader";

import Greeting from "../Dashboard/Greeting";
import SearchBar from "../../components/common/SearchBar";
import GoalCard from "../Dashboard/GoalCard";
import WorkoutCard from "../../components/common/WorkoutCard";
import AICoachCard from "../Dashboard/AICoachCard";

import { recommendedWorkouts } from "../../data/workouts";

const Dashboard = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col lg:ml-64">

        <div className="hidden lg:block">
          <DesktopHeader title="Dashboard" />
        </div>

        <MobileNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

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

            <div className="max-h-[420px] overflow-y-auto pr-2 space-y-5">

              {recommendedWorkouts.map((workout) => (

                <WorkoutCard
                  key={workout.id}
                  id={workout.id}
                  title={workout.title}
                  description={workout.description}
                  level={workout.level}
                  exercises={workout.exercises}
                  duration={workout.duration}
                  calories={workout.calories}
                />

              ))}

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