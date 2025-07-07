import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
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
    );
}

export { Form }