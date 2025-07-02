import { Route, Routes, Navigate } from "react-router";
import { Dashboard } from "../pages/Dashboard/Dashboard.page";
import { Ingredient } from "../components/Ingredient/Ingredient"
import { useEffect } from "react";
const AuthedRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ingredient" element={<Ingredient />} />
      <Route path="*" element={<Navigate to="/ingredient" replace />} />
    </Routes>
  )
}

export { AuthedRoutes }