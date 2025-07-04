import { useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";
import { ModalBase } from "../../components/Modal/ModalBase";
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
            })
            .catch((error) => {
                console.error("Error fetching ingredients:", error);
            });
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleAccept = () => {};

    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <Flex vertical gap={"5px"}>
            <Title>Dashboard</Title>
            {ingredients.map((ingredient, index) => {
                return <Ingredient name={ingredient.name} key={index} />;
            })}
        </Flex>
    );
};

export { Dashboard };
