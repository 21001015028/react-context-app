import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

const UserInput = () => {
  const [name, setName] = useState('');
  const { setUser } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) setUser(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Set Name</button>
    </form>
  );
};

export default UserInput;
