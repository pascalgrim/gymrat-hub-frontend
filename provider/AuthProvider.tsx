import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { jwtDecode } from "jwt-decode";
interface AuthContextProps {
  authenticated: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
  userId: number
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState<number>(-1)
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setAuthenticated(true);
      setUserId(getUserId(storedToken))
    }
  }, []);

  const signIn = (token: string) => {
    localStorage.setItem('accessToken', token);
    setAuthenticated(true);
  };

  const signOut = () => {
    localStorage.removeItem('accessToken');
    setAuthenticated(false);
  };

  const getUserId = (token: string) => {
    const decodedToken: {
      sub: number,
      email: string,
      iat: number
    } = jwtDecode(token)
    return decodedToken.sub
  }


  const value: AuthContextProps = {
    authenticated,
    signIn,
    signOut,
    userId
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}