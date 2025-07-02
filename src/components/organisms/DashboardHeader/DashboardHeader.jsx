
import { DashboardNav } from "../../molecules/DashboardNav/DashboardNav"

import "./DashboardHeader.scss"

export const DashboardHeader = () => {
    return (
        <header className="dashboardHeader">
            <div className="dashboardUserData">
                <img src="../../assets/avatar.svg" alt="avatar" className="userAvatar" />
                <p className="userName">Username</p>
                <div className="userStats">
                    <p>Ingredients: 40</p>
                    <p>Recipes: 18</p>
                </div>
            </div>
            <DashboardNav />
        </header>
    )
}
