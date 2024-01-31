import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Catalog = () => {
  
  const wines = [
    { id: 1, name: 'Vino 1', description: 'Descripción del Vino 1' },
    { id: 2, name: 'Vino 2', description: 'Descripción del Vino 2' },
    { id: 3, name: 'Vino 3', description: 'Descripción del Vino 3' },
   
  ];

  
  const location = useLocation();

 
  if (location.pathname === '/categoria1') {
    return (
      <div>
        <h2>Catálogo de Vinos</h2>
        <ul>
          {wines.map((wine) => (
            <li key={wine.id}>
              <Link to={`/product/${wine.id}`}>{wine.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    
    return null;
  }
};

export default Catalog;

