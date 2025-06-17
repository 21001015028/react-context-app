import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import UserDisplay from './components/UserDisplay';
import UserInput from './components/UserInput';

function App() {
  return (
    <GlobalProvider>
      <div style={{ padding: '20px' }}>
        <h1>React Context Example</h1>
        <UserDisplay />
        <UserInput />
      </div>
    </GlobalProvider>
  );
}

export default App;
