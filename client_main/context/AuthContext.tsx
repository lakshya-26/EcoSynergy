import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextProps {
  accessToken: string | null;
  fetchAccessToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const fetchAccessToken = async () => {
    try {
      const response = await fetch('/api/token');
      if (!response.ok) {
        throw new Error("Failed to fetch access token");
      }
      const data = await response.json();
      setAccessToken(data.token);
    } catch (error) {
      console.error('Failed to fetch access token:', error);
    }
  };

  useEffect(() => {
    fetchAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, fetchAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
