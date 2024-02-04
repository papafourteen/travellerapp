import React from 'react';
import { useSpring, animated } from '@react-spring/web';


export const Background = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // animáció időtartama milliszekundumban
  });

  return (
    <animated.div
      style={{
        ...props,
        backgroundImage: 'url("bg1.jpg")', // helyettesítsd a linket a képed elérési útvonalára
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // A háttér alá helyezi a többi tartalmat
        
      }}
    />
  );
};
