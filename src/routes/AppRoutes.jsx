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


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route path="/check-email" element={<CheckEmail/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/workouts" element={<WorkoutLibrary />} />
      <Route path="/workouts/:id" element={<WorkoutDetails />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;