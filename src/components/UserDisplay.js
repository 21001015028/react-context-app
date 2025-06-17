import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const UserDisplay = () => {
  const { user } = useGlobalContext();

  return <h2>Welcome {user}!</h2>;
};

export default UserDisplay;
