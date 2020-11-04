import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BonanzaContext from './components/context/BonanzaContext';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BonanzaContext>
        <BrowserRouter>
          <h1>Bonanza</h1>
          <Navbar />
          <Sidebar />
        </BrowserRouter>
      </BonanzaContext>
    </div>
  );
}

export default App;
