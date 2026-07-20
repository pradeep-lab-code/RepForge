import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

import Dashboard from "../pages/Dashboard/Dashboard";
import WorkoutLibrary from "../pages/WorkoutLibrary/WorkoutLibrary";
import WorkoutDetails from "../pages/WorkoutDetails/WorkoutDetails";
import Progress from "../pages/Progress/Progress";
import Profile from "../pages/Profile/Profile";
import CheckEmail from "../pages/CheckEmail/CheckEmail";
import EditProfile from "../pages/EditProfile/EditProfile";
import AICoach from "../pages/AICoach/AICoach";
import SavedWorkouts from "../pages/SavedWorkouts/SavedWorkouts";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      <Route
        path="/forgot-password"
        element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        }
      />

      <Route path="/check-email" element={<CheckEmail />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/workouts"
        element={
          <ProtectedRoute>
            <WorkoutLibrary />
          </ProtectedRoute>
        }
      />

      <Route
        path="/workouts/:id"
        element={
          <ProtectedRoute>
            <WorkoutDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/progress"
        element={
          <ProtectedRoute>
            <Progress />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile/edit"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ai-coach"
        element={
          <ProtectedRoute>
            <AICoach />
          </ProtectedRoute>
        }
      />

      <Route
        path="/saved-workouts"
        element={
          <ProtectedRoute>
            <SavedWorkouts />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;