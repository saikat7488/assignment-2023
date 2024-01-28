// NavigationContext.js
import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [prevPath, setPrevPath] = useState("");
  const [currentPath, setCurrentPath] = useState("");

  const updatePrevPath = (newPath) => {
    setPrevPath(currentPath);
    setCurrentPath(newPath);
  };

  return (
    <NavigationContext.Provider value={{ prevPath, currentPath, updatePrevPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
