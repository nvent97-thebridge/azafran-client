import { SideMenuNav } from "../../molecules/SideMenuNav/SideMenuNav";

import avatar from "../../../assets/avatar.svg";
import closeIcon from "../../../assets/closeicon.svg";

import "./SideMenuHeader.scss";

export const SideMenuHeader = ({ onClose }) => {
  return (
    <header className="sideMenuHeader">
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
          <p>
            <span className="spanStat">40</span> ingredients
          </p>
          <p>
            <span className="spanStat">18</span> recipes
          </p>
        </div>
      </div>

      <SideMenuNav />
    </header>
  );
};
