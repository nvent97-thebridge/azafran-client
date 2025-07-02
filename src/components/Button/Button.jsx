import "./Button.css";

const Button = ({ onClick, children }) => (
    <button className="btn-primary" onClick={onClick}>
        {children}
    </button>
);

export { Button };
