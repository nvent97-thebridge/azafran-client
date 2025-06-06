import { Button, Flex, Input, Typography } from "antd";
import { useState } from "react";
const { Title } = Typography;

const Register = () => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
    repeatPassword: "",
  });

  const handleRegisterButtonClick = () => {
    console.log(formData);
  };

  return (
    <Flex gap={"8px"} vertical style={{ width: "400px" }}>
      <Title>Register</Title>
      <Input
        value={formData.user}
        onChange={(event) =>
          setFormData((data) => {
            return { ...data, user: event.target.value };
          })
        }
        placeholder="Usuario"
      />
      <Input
        placeholder="Contraseña"
        type="password"
        value={formData.password}
        onChange={(event) =>
          setFormData((data) => {
            return { ...data, password: event.target.value };
          })
        }
      />
      <Input
        placeholder="Repetir contraseña"
        type="password"
        value={formData.repeatPassword}
        onChange={(event) =>
          setFormData((data) => {
            return { ...data, repeatPassword: event.target.value };
          })
        }
      />
      <Button type="primary" onClick={handleRegisterButtonClick}>
        Register
      </Button>
    </Flex>
  );
};

export { Register };
