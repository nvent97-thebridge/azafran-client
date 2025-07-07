import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Input, Typography } from "antd";

function Register() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <Flex gap={"8px"} vertical style={{ width: "400px" }}>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <input {...register("firstName")} placeholder="First name" />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="Admin">Admin</option>
          <option value="Employee">Employee</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </Flex>
  );
}
export { Register };
