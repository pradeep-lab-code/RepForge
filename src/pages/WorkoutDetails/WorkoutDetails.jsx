  import { useState } from "react";
  import { useParams } from "react-router-dom";

  import Sidebar from "../../components/common/Sidebar";
  import DesktopHeader from "../../components/common/DesktopHeader";
  import MobileNavbar from "../../components/common/MobileNavbar";

  import WorkoutHero from "./WorkoutHero";
  import WorkoutInfo from "./WorkoutInfo";
  import EquipmentList from "./EquipmentList";
  import ExerciseList from "./ExerciseList";
  import WorkoutInstructions from "./WorkoutInstructions";
  import WorkoutAction from "./WorkoutAction";

  import {
    recommendedWorkouts,
    popularWorkouts,
  } from "../../data/workouts";

  const WorkoutDetails = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { id } = useParams();

    const allWorkouts = [
      ...recommendedWorkouts,
      ...popularWorkouts,
    ];

    const workout = allWorkouts.find(
      (item) => item.id === Number(id)
    );

    if (!workout) {
      return (
        <div className="text-white p-10">
          Workout Not Found
        </div>
      );
    }

    return (
      <div className="flex min-h-screen bg-background">

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col lg:ml-64">

          <DesktopHeader title={workout.title} />

          <MobileNavbar
            onMenuClick={() => setIsSidebarOpen(true)}
          />

          <main className="p-6">

            <WorkoutHero workout={workout} />

            <WorkoutInfo workout={workout} />
  <EquipmentList workout={workout} />

          <ExerciseList workout={workout} />

            <WorkoutInstructions workout={workout} />

            <WorkoutAction />

          </main>

        </div>

      </div>
    );
  };

  export default WorkoutDetails;