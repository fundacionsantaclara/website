import React, { useState, useEffect } from "react";
import "./Videopart.css";


const CounterCircle = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = Math.ceil(end / 1000); // Ajusta la velocidad del incremento
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20); // Ajusta el tiempo entre incrementos
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="circle">
      <div className="count">{count}</div>
      <div className="label">{label}</div>
    </div>
  );
};

export default CounterCircle;