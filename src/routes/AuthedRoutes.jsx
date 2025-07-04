import { Routes, Route, Navigate } from "react-router";

import { MainLayout } from "../components/templates/MainLayout/MainLayout";
import { PantryPage } from "../pages/Pantry/Pantry.page";
import { ProfilePage } from "../pages/Profile/Profile.page";

export function AuthedRoutes() {
  localStorage.setItem("user", "user");
  localStorage.setItem("password", "password");
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<MainLayout />} />
      <Route
        path="/pantry"
        element={<MainLayout mainContent={<PantryPage />} />}
      />
      <Route
        path="/profile"
        element={<MainLayout mainContent={<ProfilePage />} />}
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
