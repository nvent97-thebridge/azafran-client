import { useState, useEffect } from "react";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { DashboardNav } from "../DashboardNav/DashboardNav"
const { Title, Paragraph } = Typography;
const Dashboard = () => {
  // mostrarle al usuario los ingredientes que el
  //Mismo ha puesto en su db
  const [ingredients, setIngredients] = useState([]);

  const navigate = useNavigate();

  /*if (!localStorage.getItem("access_token")){
    navigate("/login");
  }*/
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!localStorage.getItem("access_token")) {
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
        console.log(data)
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