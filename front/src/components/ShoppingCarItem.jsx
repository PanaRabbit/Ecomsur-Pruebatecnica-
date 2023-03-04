import React from "react";

const ShoppingCarItem = ({ data }) => {
  let { name, countInStock, price, image } = data;
  let stock = 1;

  return (
    <article className="shopping-card-item padding scale">
      <figure className="shopping-card-item__image">
        <img src={`http://localhost:5000${image}`} alt="products" />
      </figure>
      <article className="shopping-card-item__info flex-column">
        <h2 className="shopping-card-item__name">{name}</h2>
        <p className="shopping-card-item__stock">{countInStock}</p>
        <p className="shopping-card-item__price">$ {price}</p>
      </article>
      <article className="shopping-card-item__buy">
        <button
          onClick={() => console.log("TODO for get off a item")}
          className="shopping-card-item__buy-less button transition-button"
        >
          <span className="fas fa-minus"></span>
        </button>
        <p className="shopping-card-item__buy-count flex-center">{stock}</p>

        <button
          onClick={() => console.log("TODO for add more item")}
          className="shopping-card-item__buy-more button transition-button"
        >
          <span className="fas fa-plus"></span>
        </button>
      </article>
      <style jsx>{`
        .shopping-card-item {
          display: grid;
          justify-items: center;
          width: 100%;
          height: auto;
          grid-gap: 12px;
          text-align: center;
          background-color: var(--white);
          border-radius: 20px;
          max-width: 580px;
        }
        .shopping-card-item__image {
          width: 250px;
          height: 250px;
        }
        .shopping-card-item__name {
          font-size: 1.8rem;
          font-weight: var(--bold);
          margin-bottom: 8px;
        }

        .shopping-card-item__stock {
          font-size: 1.6rem;
          font-weight: var(--bold);
          margin-bottom: 8px;
        }

        .shopping-card-item__price {
          font-size: 2rem;
          font-family: var(--font-display);
          margin-bottom: 8px;
        }
        .shopping-card-item__buy {
          display: flex;
          gap: 8px;
        }
        .shopping-card-item__buy-count {
          background-color: transparent;
          font-family: var(--font-display);
          font-size: 3.4rem;
          width: 40px;
          height: 40px;
          border: 2px solid var(--black);
          border-radius: 10px;
          padding-bottom: 10px;
        }
        .button {
          outline: none;
          border: none;
          border-radius: 20px;
          width: 40px;
          height: 40px;
          font-size: 1.8rem;
          border: 1.5px solid var(--black);
        }
        @media (min-width: 620px) {
          .shopping-card-item {
            grid-template-columns: 130px 250px 160px;
            grid-template-rows: 120px;
            text-align: start;
            align-items: center;
          }
          .shopping-card-item__image {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </article>
  );
};

export default ShoppingCarItem;
