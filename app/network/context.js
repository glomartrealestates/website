"use client"
import React, { useState, createContext } from "react";

let Context = createContext();

let ContextData = ({ children }) => {
  let [carousel, setCarousel] = useState(false);

  let toggle = () => {
    setCarousel(!carousel);
  };

  return (
    <Context.Provider value={{ carousel, toggle }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextData };
