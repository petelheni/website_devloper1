// App.js
import React from 'react';
import { ThemeProvider } from './component/ThemeContext';
import Login from './component/Login';

function App() {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
}

export default App;
