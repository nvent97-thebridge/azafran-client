// DashboardHeader.jsx
import { DashboardNav } from "../../molecules/DashboardNav/DashboardNav";

import avatar from "../../../assets/avatar.svg";
import closeIcon from "../../../assets/closeicon.svg";

import "./DashboardHeader.scss";

export const DashboardHeader = ({ onClose }) => {
    return (
        <header className="dashboardHeader">
            <button className="closeBtn" onClick={onClose}>
                <img src={closeIcon} alt="Close Menu" />
            </button>

            <div className="dashboardUserData">
                <div className="userData">
                    <img src={avatar} alt="avatar" className="userAvatar" />
                    <p className="userName">Username</p>
                    <p className="userEmail">useremail@useremail.com</p>
                </div>
                <div className="userStats">
                    <p><span className="spanStat">40</span> ingredients</p>
                    <p><span className="spanStat">18</span> recipes</p>
                </div>
            </div>

            <DashboardNav />
        </header>
    );
};

