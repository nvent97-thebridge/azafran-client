import "./Input.css";

const Input = ({ type, children }) => (
  <>
    <input className="inpt-text" type={type} placeholder={children} />
    <br />
  </>
);

export { Input };
