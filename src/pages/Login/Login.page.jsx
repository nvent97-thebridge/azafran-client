import { useState } from "react";
import { Button, Flex, Input, Typography } from "antd";
const { Title } = Typography;

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButtonClick = () => {
    console.log(user, password)
  }

  return (
    <Flex gap={"8px"} vertical style={{ width: "400px" }}>
      <Title>Login</Title>
      <Input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Usuario"
      />
      <Input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        type="primary"
        disabled={!user.trim() || !password.trim()}
        onClick={handleLoginButtonClick}
      >
        Log in
      </Button>
    </Flex>
  );
};

export { Login };
