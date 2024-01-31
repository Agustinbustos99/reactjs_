import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  
  const { id } = useParams();

 
  const wines = [
    {
      id: 1,
      name: 'Vino 1',
      description: 'Descripción del Vino 1',
      tastingDescription: 'Notas de frutas rojas y suaves taninos.',
    },
    {
      id: 2,
      name: 'Vino 2',
      description: 'Descripción del Vino 2',
      tastingDescription: 'Aromas a vainilla y cuerpo medio.',
    },
    {
      id: 3,
      name: 'Vino 3',
      description: 'Descripción del Vino 3',
      tastingDescription: 'Elegante con final persistente de especias.',
    },
    
  ];

  
  const wine = wines.find((wine) => wine.id === parseInt(id));

  if (!wine) {
    
    return <div>Vino no encontrado</div>;
  }

  
  const description = wine.description || 'Descripción genérica para este vino';
  const tastingDescription = wine.tastingDescription || 'Descripción de cata genérica para este vino';

  return (
    <div>
      <h2>{wine.name}</h2>
      <p>{description}</p>
      <p>Tasting Notes: {tastingDescription}</p>
    </div>
  );
};

export default ProductDetail;
