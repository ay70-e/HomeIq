import React, { useState } from "react";

const FormInput = ({ label, type, name, value, onChange, autoComplete }) => {
  const [focus, setFocus] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    color: "#3e3a37",
  };

  const labelStyle = {
    fontWeight: 500,
    color: "#3e3a37",
  };

  const inputStyle = {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#a4b98e",        // match button gradient start color
    borderRadius: "1rem",           // same as button rounded-2xl
    padding: "0.5rem",
    outline: "none",
    background: focus
      ? "linear-gradient(to bottom right, #a4b98e, #a4b98e)" // gradient on focus
      : "linear-gradient(to bottom right, #fff, #fff)", // default gradient
    color: "#3e3a37",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        style={inputStyle}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        required
      />
    </div>
  );
};

export default FormInput;
