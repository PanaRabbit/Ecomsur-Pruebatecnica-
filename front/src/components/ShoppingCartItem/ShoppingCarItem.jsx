import React from "react";
import '../ShoppingCartItem/ShoppingCartItem.css';

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
      
    </article>
  );
};

export default ShoppingCarItem;
