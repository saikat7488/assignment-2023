// ModelContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const ModelContext = createContext();

export const useModelContext = () => useContext(ModelContext);

export const ModelProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [modelOn, setModelOn] = useState(!isAuthenticated);

  useEffect(() => {
    setModelOn(!isAuthenticated);
  }, [isAuthenticated]);

  return (
    <ModelContext.Provider value={{ modelOn, setModelOn }}>
      {children}
    </ModelContext.Provider>
  );
};
