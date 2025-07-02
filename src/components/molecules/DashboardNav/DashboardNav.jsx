import { Link } from "react-router"

import "./DashboardNav.scss"

export const DashboardNav = () => {
    return (
        <nav className='dashboardNav'>
            <Link to="/pantry" className="navLink">Your Pantry</Link>
            <Link to="/recipes" className="navLink">Your Recipes</Link>
            <Link to="/profile" className="navLink">Your Profile</Link>
            <Link to="/logout" className="navLink">Logout</Link>
        </nav>
    )
}
