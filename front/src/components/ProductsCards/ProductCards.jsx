import React from "react";
import { Link } from "react-router-dom";
import '../ProductsCards/ProductCards.css';

export const ProductsCards = ({
  image,
  name,
  brand,
  price,
  rating,
  reviews,
  disable,
  add,
  productId,
  id,
}) => {
  return (
    <article className="product-card scale">
      <figure className="product-card-image">
        <img src={`http://localhost:5000${image}`} alt={name} />
      </figure>
      <article className="product-card-info">
        <div className="flex-gap">
          <span className="fas fa-microchip"></span>
          <h2 className="product-card-name margin-bottom-8">{name}</h2>
        </div>
        <div className="flex-gap">
          <span className="fas fa-tag"></span>
          <p className="product-card-brand margin-bottom-8">{brand}</p>
        </div>
        <div className="flex-gap">
          <span className="fas fa-star"></span>
          <h2 className="product-card-rating light margin-bottom-8">
            {rating}
          </h2>
        </div>
        <div className="flex-gap">
          <span className="far fa-thumbs-up"></span>
          <h2 className="product-card-reviews light margin-bottom-8">
            {reviews}
          </h2>
        </div>
        <div className="flex-gap">
          <span className="fas fa-hand-holding-usd"></span>
          <h3 className="product-card-price margin-bottom-8">$ {price}</h3>
        </div>
        <article className="product-card-button">
          <Link to={`/products/${productId}`}>
            <button className="product-card-buttons transition-button">
              <span className="fas fa-money-check margin"></span>
              Details
            </button>
          </Link>
          <button
            onClick={() => add(id)}
            className={`product-card-buttons transition-button ${disable}`}
          >
            <span className="far fa-plus-square margin"></span>
            Add item
          </button>
        </article>
      </article>

    
    </article>
  );
};