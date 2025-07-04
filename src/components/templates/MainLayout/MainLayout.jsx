import { useState } from "react";
import { SideMenuHeader } from "../../organisms/SideMenuHeader/SideMenuHeader";

import "./MainLayout.scss";

import menuIcon from "../../../assets/menuicon.svg";

export const MainLayout = ({ mainContent }) => {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <>
      {!menuVisible && (
        <button className="menuBtn" onClick={() => setMenuVisible(true)}>
          <img
            src={menuIcon}
            alt="Open Menu"
            style={{ width: 24, height: 24 }}
          />
        </button>
      )}

      {menuVisible && <SideMenuHeader onClose={() => setMenuVisible(false)} />}

      <main className="dashboardMain">{mainContent}</main>
    </>
  );
};
