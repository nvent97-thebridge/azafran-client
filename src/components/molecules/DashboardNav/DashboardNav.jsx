import { Link } from "react-router";
import { useEffect } from "react";
import pantryIcon from "../../../assets/pantryicon.svg";
import recipesIcon from "../../../assets/recipesicon.svg";
import profileIcon from "../../../assets/profileicon.svg";
import logoutIcon from "../../../assets/logouticon.svg";

import "./DashboardNav.scss";

const LogOutButtonCkick = () => {
  localStorage.clear();
  navigate("/login");
};
export const DashboardNav = () => {
  return (
    <nav className="dashboardNav">
      <Link to="/pantry" className="navLink">
        <img src={pantryIcon} alt="" className="linkIcon" />
        Your Pantry
      </Link>
      <Link to="/recipes" className="navLink">
        <img src={recipesIcon} alt="" className="linkIcon" />
        Your Recipes
      </Link>
      <Link to="/settings" className="navLink">
        <img src={profileIcon} alt="" className="linkIcon" />
        Your Profile
      </Link>
      <Link to="/logout" onClick={LogOutButtonCkick} className="navLink">
        <img src={logoutIcon} alt="" className="linkIcon" />
        Logout
      </Link>
    </nav>
  );
};
