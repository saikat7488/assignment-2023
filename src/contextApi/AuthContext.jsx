import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigateCrossOrigin = useNavigate();
  const navigateAuthenticationError = useNavigate();

  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const initialIsAuthenticated = !!storedUser;

  const [user, setUser] = useState(initialUser);
  const [isAuthenticated, setIsAuthenticated] = useState(initialIsAuthenticated);

  const login = async (email, password) => {
    try {
      // Make API request to authenticate user
      const response = await fetch(
        `https://dbforassignment2023.onrender.com/user_data?email=${email}&password=${password}`
      );

      if (response.ok) {
        // Save user data to localStorage on successful login
        const userData = await response.json();

        console.log('USER Length :',userData.length);

        if (userData.length > 0) {
          localStorage.setItem("user", JSON.stringify(userData));
          setUser(userData);
          setIsAuthenticated(true);
          return true; // Authentication successful
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("user");
          navigateAuthenticationError("/401");
          return false; // Authentication failed
        }
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        navigateAuthenticationError("/401");
        return false; // Authentication failed
      }
    } catch (error) {
      // Handle cross-origin error
      navigateCrossOrigin("/cross-origin-error");
      return false; // Authentication failed due to cross-origin error
    }
  };

  const logout = () => {
    // Remove user data from localStorage on logout
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
