import React from "react";
import { Link } from "react-router-dom";

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

      <style jsx>{`
        .product-card-buttons {
          width: 120px;
          height: 40px;
          margin-right: 12px;
          outline: none;
          border: 3px solid var(--black);
          text-align: center;
          background-color: transparent;
          font-size: var(--button);
          font-family: var(--font-display);
        }
        .product-card {
          display: grid;
          width: 100%;
          max-width: 580px;
          height: auto;
          background-color: var(--white);
          border-radius: 10px;
          padding: 14px;
          font-family: var(--font-sans-serif);
          font-size: 1.6rem;
          color: var(--hover-gray);
        }
        .product-card-image {
          width: 230px;
          height: 200px;
          margin: 15px auto;
        }
        .product-card-name {
          font-weight: var(--bold);
          font-size: var(--card-name);
          color: var(--black);
        }
        .product-card-brand {
          font-weight: var(--light);
          font-size: var(--card-brand);
          color: var(--black);
        }
        .product-card-price {
          font-family: var(--font-display);
          font-size: var(--card-price);
          font-weight: var(--bold);
          color: var(--black);
        }
        .product-card-button {
          margin-top: 8px;
        }
        .margin {
          margin-right: 6px;
        }
        .light {
          font-weight: var(--medium);
          align-items: center;
          color: var(--black);
          font-size: var(--card-items);
        }
        @media (min-width: 580px) {
          .product-card {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            grid-gap: 8px;
          }
          .product-image-card {
            grid-column: 1;
          }
          .product-card-info {
            grid-column: 2;
          }
        }
      `}</style>
    </article>
  );
};