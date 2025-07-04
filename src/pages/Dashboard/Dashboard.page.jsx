import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Flex, Typography } from 'antd';
import './Dashboard.css';

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirección si no hay token
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
      return;
    }

    const handleResize = () => {
      setIsOpen(window.innerWidth >= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Fetch de ingredientes
    const accessToken = localStorage.getItem("accessToken");
    fetch("http://localhost:8080/ingredients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data);
        console.log(data);
      });

    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);

  return (
    <div className="flex">
      {/* Botón móvil */}
      <button
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 z-40
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
        `}
      >
        <div className="p-4 font-bold text-lg border-b border-gray-700">Menú</div>
        <ul className="p-4 space-y-4">
          <li className="hover:text-yellow-300 cursor-pointer">Inicio</li>
          <li className="hover:text-yellow-300 cursor-pointer">Perfil</li>
          <li className="hover:text-yellow-300 cursor-pointer">Ajustes</li>
          <li className="hover:text-yellow-300 cursor-pointer">Cerrar sesión</li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 ml-0 md:ml-64 transition-all">
        <Title>Dashboard</Title>
        {ingredients.map((ingredient, index) => (
          <Flex
            key={index}
            justify="center"
            align="center"
            style={{
              border: "1px solid black",
              borderRadius: "8px",
              padding: "5px",
              marginBottom: "10px",
            }}
          >
            <Paragraph style={{ margin: 0 }}>{ingredient.name}</Paragraph>
          </Flex>
        ))}
      </main>
    </div>
  );
};

export { Dashboard };