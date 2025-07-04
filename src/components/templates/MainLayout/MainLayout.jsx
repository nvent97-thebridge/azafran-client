import { useState } from "react";

import { LayoutTopHeader } from "../../organisms/LayoutTopHeader/LayoutTopHeader";
import { SideMenuHeader } from "../../organisms/SideMenuHeader/SideMenuHeader";

import "./MainLayout.scss";

import menuIcon from "../../../assets/menuicon.svg";

export const MainLayout = ({ mainContent }) => {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <>
      <LayoutTopHeader setMenuVisible={setMenuVisible} />
      {menuVisible && <SideMenuHeader onClose={() => setMenuVisible(false)} />}

      <main className="dashboardMain">{mainContent}</main>
    </>
  );
};
