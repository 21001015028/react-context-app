import React, { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState('Guest');

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
