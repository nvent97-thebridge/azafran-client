import { Routes, Route, Navigate } from "react-router";

import { MainLayout } from "../components/templates/MainLayout/MainLayout";
import { PantryPage } from "../pages/Pantry/Pantry.page";

export function AuthedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<MainLayout />} />
      <Route
        path="/pantry"
        element={<MainLayout mainContent={<PantryPage />} />}
      />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
