import React, { useState, useEffect } from 'react';

export const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const animatedStyle = {
    opacity: isAnimated ? 1 : 0,
    transform: `translate(-50%, -50%) ${isAnimated ? 'translateX(0)' : 'translateX(-100px)'}`,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
    textAlign: 'center',
    zIndex: 1,
    transition: 'opacity 1s, transform 1s',
  };

  return (
    <div className="home">
      <h1 style={animatedStyle} className="gradient-text">
        Discover the World!
      </h1>
    </div>
  );
};


