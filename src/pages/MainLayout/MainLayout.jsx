import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";
import { DashboardHeader } from "../../components/organisms/DashboardHeader/DashBoardHeader";

import "./MainLayout.scss";

import menuIcon from "../../assets/menuicon.svg";

const { Title } = Typography;

export const MainLayout = ({ mainContent }) => {
  const [ingredients, setIngredients] = useState([]);
  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch("http://localhost:8080/ingredients", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data);
      });
  }, []);

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

      {menuVisible && <DashboardHeader onClose={() => setMenuVisible(false)} />}

      <main className="dashboardMain">{mainContent}</main>
    </>
  );
};
