import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";

import { DashboardHeader } from "../../components/organisms/DashboardHeader/DashBoardHeader";

const { Title } = Typography;

const Dashboard = () => {
  const [ingredients, setIngredients] = useState([]);

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
      <DashboardHeader />
      <main className="dashboardMain">
        <Flex vertical gap={"5px"}>
          <Title>Dashboard</Title>
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredient
                name={ingredient.name}
                key={index}
              />
            );
          })}
        </Flex>
      </main>
    </>
  );
};

export { Dashboard };
