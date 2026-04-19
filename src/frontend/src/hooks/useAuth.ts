import { useState, useEffect } from "react";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  principal: string | undefined;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export function useAuth(): AuthState {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [principal, setPrincipal] = useState<string | undefined>(undefined);

  useEffect(() => {
    const user = localStorage.getItem("cfa_user");
    if (user) {
      setIsAuthenticated(true);
      setPrincipal(user);
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email && password.length >= 6) {
      localStorage.setItem("cfa_user", email);
      setIsAuthenticated(true);
      setPrincipal(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("cfa_user");
    setIsAuthenticated(false);
    setPrincipal(undefined);
  };

  return { isAuthenticated, isLoading, principal, login, logout };
}
