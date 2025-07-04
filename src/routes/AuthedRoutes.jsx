import { Routes, Route, Navigate } from "react-router";

import { MainLayout } from "../components/templates/MainLayout/MainLayout";
import { PantryPage } from "../pages/Pantry/Pantry.page";
import { Profile } from "../pages/Profile/Profile";

export function AuthedRoutes() {
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
        element={<MainLayout mainContent={<Profile />} />}
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
