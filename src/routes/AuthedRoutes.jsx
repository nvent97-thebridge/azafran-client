import { Route, Routes, Navigate } from "react-router";
import { MainLayout } from "../pages/MainLayout/MainLayout";

const AuthedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { AuthedRoutes };
