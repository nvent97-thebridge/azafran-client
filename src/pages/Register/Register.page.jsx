import { Button, Flex, Input } from "antd";
import "./Register.scss"

const Register = () => {
  return (
    <Flex gap={"8px"} vertical style={{width: '400px'}}>
      <h1>Register</h1>
      <Input placeholder="Usuario" />
      <Input placeholder="Contraseña" type="password" />
      <Input placeholder="Repetir contraseña" type="password" />
      <Button type="primary">Register</Button>
    </Flex>
  );
};

export { Register };
