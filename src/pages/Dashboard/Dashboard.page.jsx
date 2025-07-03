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
            });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Flex vertical gap={"5px"}>
            <Title>Dashboard</Title>
            {ingredients.map((ingredient, index) => {
                return <Ingredient name={ingredient.name} key={index} />;
            })}
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Abrir Modal
            </Button>
            <ModalBase
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Agregar ingrediente"
            >
                {/* Contenido del modal aquí */}
                <p>Contenido del ModalBase</p>
                <Button type="primary">Accept</Button>
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalBase>
        </Flex>
    );
};

export { Dashboard };
