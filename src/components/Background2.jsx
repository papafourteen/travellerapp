import React, { useState, useEffect } from 'react';
import bg1 from '../assets/bg1.jpg'

export const Background = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
      setOpacity(1);
  }, []);

  return (
    <div
      style={{
        opacity: opacity,
        backgroundImage: `url(${bg1})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        transition: 'opacity 1s ease-in-out', // CSS tranzíció az opacity tulajdonságra
        zIndex: -100, // A háttér alá helyezi a többi tartalmat
      }}
    />
  );
};
