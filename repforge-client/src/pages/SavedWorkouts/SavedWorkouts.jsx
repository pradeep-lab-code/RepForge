import { useState } from "react";
import { Heart } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/common/Sidebar";
import DesktopHeader from "../../components/common/DesktopHeader";
import MobileNavbar from "../../components/common/MobileNavbar";
import EmptyState from "../../components/common/EmptyState";

import SavedWorkoutCard from "./SavedWorkoutCard";

import { savedWorkouts } from "../../data/savedWorkouts";

const SavedWorkouts = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col lg:ml-64">
        <div className="hidden lg:block">
          <DesktopHeader title="Saved Workouts" />
        </div>

        <MobileNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="flex-1 p-6">

          {savedWorkouts.length === 0 ? (
            <EmptyState
              icon={<Heart size={70} weight="duotone" />}
              title="No Saved Workouts"
              description="Save workouts from the library or AI Coach to access them anytime."
              buttonText="Explore Workouts"
              onClick={() => navigate("/workouts")}
            />
          ) : (
            <>
              <p className="text-text-secondary mb-8">
                Your favourite workouts all in one place.
              </p>

              <div className="grid lg:grid-cols-2 gap-6">
                {savedWorkouts.map((workout) => (
                  <SavedWorkoutCard
                    key={workout.id}
                    workout={workout}
                  />
                ))}
              </div>
            </>
          )}

        </main>
      </div>
    </div>
  );
};

export default SavedWorkouts;