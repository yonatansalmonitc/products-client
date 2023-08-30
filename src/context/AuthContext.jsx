import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [isUserLoading, setIsUserLoading] = useState(true);

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    try {
      setIsUserLoading(true);
      const res = await axios.get('http://localhost:8080/users/check-status', { withCredentials: true });
      setUser(res.data.userId);
      setIsUserLoading(false);
    } catch (err) {
      console.log(err);
      setIsUserLoading(false);
    }
  };

  return <AuthContext.Provider value={{ user, checkStatus, setUser, isUserLoading }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthContextProvider;
