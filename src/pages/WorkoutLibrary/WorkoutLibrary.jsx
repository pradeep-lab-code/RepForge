import { useState } from "react";
import { Fire } from "phosphor-react";

import Sidebar from "../../components/common/Sidebar";
import DesktopHeader from "../../components/common/DesktopHeader";
import MobileNavbar from "../../components/common/MobileNavbar";

import WorkoutHeader from "./WorkoutHeader";
import WorkoutCategory from "./WorkoutCategory";
import WorkoutCard from "../../components/common/WorkoutCard";

import {
  recommendedWorkouts,
  popularWorkouts,
} from "../../data/workouts";

const WorkoutLibrary = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecommended =
    selectedCategory === "All"
      ? recommendedWorkouts
      : recommendedWorkouts.filter(
          (workout) => workout.category === selectedCategory
        );

  const filteredPopular =
    selectedCategory === "All"
      ? popularWorkouts
      : popularWorkouts.filter(
          (workout) => workout.category === selectedCategory
        );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col lg:ml-64">
        <DesktopHeader title="Workout Library" />

        <MobileNavbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="p-6">

          <WorkoutHeader />

          <WorkoutCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Recommended */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-text-primary mb-5 flex items-center gap-2">
              <Fire className="text-orange-500" />

              {selectedCategory === "All"
                ? "Recommended For You"
                : `Recommended ${selectedCategory} Workouts`}
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {filteredRecommended.length > 0 ? (
                filteredRecommended.map((workout) => (
                  <WorkoutCard
                    key={workout.id}
                    title={workout.title}
                    description={workout.description}
                    level={workout.level}
                    exercises={workout.exercises}
                    duration={workout.duration}
                    calories={workout.calories}
                  />
                ))
              ) : (
                <p className="text-text-secondary">
                  No recommended workouts found.
                </p>
              )}

            </div>

          </section>

          {/* Popular */}

          <section className="mt-10">

            <h2 className="text-2xl font-bold text-text-primary mb-5 flex items-center gap-2">
              <Fire className="text-orange-500" />

              {selectedCategory === "All"
                ? "Popular Workouts"
                : `Popular ${selectedCategory} Workouts`}
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {filteredPopular.length > 0 ? (
                filteredPopular.map((workout) => (
                  <WorkoutCard
                    key={workout.id}
                    title={workout.title}
                    description={workout.description}
                    level={workout.level}
                    exercises={workout.exercises}
                    duration={workout.duration}
                    calories={workout.calories}
                  />
                ))
              ) : (
                <p className="text-text-secondary">
                  No popular workouts found.
                </p>
              )}

            </div>

          </section>

        </main>
      </div>
    </div>
  );
};

export default WorkoutLibrary;