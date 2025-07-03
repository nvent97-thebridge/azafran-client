import { Route, Routes, Navigate, useNavigate } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import { Ingredient } from "../components/Ingredient/Ingredient"
import { useEffect } from "react";
const AuthedRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ingredient" element={<Ingredient />} />
      <Route path="*" element={<Navigate to="/ingredient" replace />} />
    </Routes>
  )
}

export { AuthedRoutes }