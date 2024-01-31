import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Catalog from './components/Catalog';
import ProductDetail from './components/Product';
import reactLogo from './assets/react.svg';

import './app.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/categoria1" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <h1>tu tienda online</h1>
       
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Router>
  );
}

export default App;
