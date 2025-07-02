import React from "react";
import "./Button.css";

export default function Button({ onClick, children }) {
    return (
        <button className="btn-primary" onClick={onClick}>
            {children}
        </button>
    );
}
