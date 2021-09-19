import React, { useState, useEffect } from 'react';
import "./Effect1.css";
export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
        alert(`welcome`);
      }
  }, [count]);

  return (
    <div>
      <button className="button" onClick={() => setCount(count + 1)}>
        Login
      </button>
    </div>
  );
}