import React from "react";
import { useSpring, animated } from "@react-spring/web";

export const Home = () => {
  const textProps = useSpring({
    from: { opacity: 0,  x: "-100px" },
    to: { opacity: 1,  x: "0" },
    config: { duration: 1000 },
    delay: 500,
  });

  return (
    <div className="home">
      <animated.h1
        style={{
          ...textProps,
          position: "absolute",
          bottom: "50%",
          left: "50%",

          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 1,
        }}
        className="gradient-text"
      >
        Discover the World!
      </animated.h1>
    </div>
  );
};
