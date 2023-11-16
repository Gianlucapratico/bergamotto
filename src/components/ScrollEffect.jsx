// ScrollEffect.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import "../App.css"; // Aggiungi il tuo stile CSS per l'effetto fade-in

const ScrollEffect = ({ children, customClass }) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return (
    <div
      ref={ref}
      className={`scroll-effect ${customClass} ${
        isIntersecting ? "visible" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollEffect;
