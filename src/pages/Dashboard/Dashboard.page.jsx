import { useState, useEffect } from "react";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { DashboardNav } from "../DashboardNav/DashboardNav"
const { Title, Paragraph } = Typography;
const Dashboard = () => {
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
    fetch("http://localhost:8080/ingredients", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: accessToken,
      },
    }).then((res) => res.json())
      .then((data) => {
        setIngredients(data);
      })
  }, [])
  return (
    <Flex vertical gap={"5px"}>
      <DashboardNav></DashboardNav>
      <Title>Dashboard</Title>
      {ingredients.map((ingredient, index) => {
        return (<Paragraph key={index}>{ingredient.name}</Paragraph>
        );
      })}
    </Flex>
  )
}

export { Dashboard }