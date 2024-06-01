import React from 'react';
import './App.css';
import MeuComponente from './MeuComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">Minha Aplicação React</h1>
        <MeuComponente />
      </header>
    </div>
  );
}

export default App;
