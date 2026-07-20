import { useState } from "react";

import Sidebar from "../../components/common/Sidebar";
import DesktopHeader from "../../components/common/DesktopHeader";
import MobileNavbar from "../../components/common/MobileNavbar";

import AIForm from "./AIForm";
import AIWorkoutResult from "./AIWorkoutResult";

const AICoach = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [generatedWorkout, setGeneratedWorkout] = useState(null);

  return (

    <div className="flex min-h-screen bg-background">

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col lg:ml-64">

        <DesktopHeader title="AI Workout Generator" />

        <MobileNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-6">

          <AIForm
            setGeneratedWorkout={setGeneratedWorkout}
          />

          {generatedWorkout && (

            <AIWorkoutResult
              workout={generatedWorkout}
            />

          )}

        </main>

      </div>

    </div>

  );

};

export default AICoach;