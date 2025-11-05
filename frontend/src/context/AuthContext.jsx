import { createContext, useState, useEffect } from "react";
import { getCurrentUser, saveUser, logoutUser } from "../utils/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage on refresh
    const storedUser = getCurrentUser();
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    saveUser(userData);
    setUser(userData);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
