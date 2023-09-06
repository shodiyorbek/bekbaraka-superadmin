import { useState, createContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access') || null);
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh') || null);

  const login = ({  accessToken, refreshToken }) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  };


  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('access', accessToken);
    } else {
      localStorage.removeItem('access');
    }
  }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem('refresh', refreshToken);
    } else {
      localStorage.removeItem('refresh');
    }
  }, [refreshToken]);

  return (
      <AuthContext.Provider value={{  accessToken, refreshToken, login, logout }}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthContext;
