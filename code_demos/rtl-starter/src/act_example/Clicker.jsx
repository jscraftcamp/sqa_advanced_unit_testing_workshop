import React from "react";
import { useState } from "react";

export const Clicker = () => {
  const [title, setTitle] = useState("");

  const handleClick = () => {
    setTitle("Clicked");
  };

  return (
    <>
      <button onClick={handleClick} role="button">
        Click me
      </button>
      <h1 role="headline">{title}</h1>
    </>
  );
};
