import { Link } from "react-router-dom";

import "./DashboardNav.scss";

export const DashboardNav = () => {

    return (
        <>
            <nav className="dashboardNavContainer">
                <Link to="/recipes" className="dashboardNavLink">
                    <p className="linkText">Recipes</p>
                </Link>
                <Link to="/pantry" className="dashboardNavLink">
                    <img
                        className="dashboardNavImg"
                    />
                    <p className="linkText">Pantry</p>
                </Link>
                <Link to="/settings" className="dashboardNavLink">
                    <img
                        className="dashboardNavImg"
                    />
                    <p className="linkText">Settings</p>
                </Link>
                <Link to="/logout" className="dashboardNavLink">
                    <img
                        className="dashboardNavImg"
                    />
                    <p className="linkText">LogOut</p>
                </Link>
            </nav >
        </>
    );
};