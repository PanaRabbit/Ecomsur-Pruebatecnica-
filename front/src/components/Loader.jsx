import React from "react";

export const Loader = () => {
  return (
    <section className="loader padding">
      <h2 className="loader-title">Cargando los productos</h2>
      <style jsx>{`
        .loader {
          width: 100%;
          height: 100vh;
          font-size: 3rem;
          text-align: center;
          font-family: var(--font-display);
        }
        .loader-title {
          margin-top: 40px;
        }
      `}</style>
    </section>
  );
};
