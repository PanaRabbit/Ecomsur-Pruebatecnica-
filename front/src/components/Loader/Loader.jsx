import React, { useState, useEffect } from "react";
import '../Loader/Loader.css';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="loader-container">
      <section className="loader padding"></section>
    </div>
  ) : (
    <div></div>
  );
};
