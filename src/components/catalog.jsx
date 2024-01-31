import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Catalog = () => {
  // Supongamos que tienes un array de vinos
  const wines = [
    { id: 1, name: 'Vino 1', description: 'Descripción del Vino 1' },
    { id: 2, name: 'Vino 2', description: 'Descripción del Vino 2' },
    { id: 3, name: 'Vino 3', description: 'Descripción del Vino 3' },
    // ... otros vinos
  ];

  // Obtiene la ruta actual
  const location = useLocation();

  // Verifica si estás en la ruta /categoria1
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
    // Si no estás en la ruta /categoria1, no renderiza nada
    return null;
  }
};

export default Catalog;

