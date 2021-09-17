import React from 'react';
import './App.css';
import { Symfoni } from "./hardhat/SymfoniContext";
import { AdminContract } from './components/AdminContract';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true} loadingComponent={<h1>Loading...</h1>}>
          <AdminContract/>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
