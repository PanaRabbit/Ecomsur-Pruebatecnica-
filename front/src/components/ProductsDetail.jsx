import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const ProductsDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getApiProducts();
  }, []);

  const getApiProducts = async () => {
    let response = await fetch(`http://localhost:5000/api/products/${id}`);
    let data = await response.json();
    setProductDetail(data);
  };

  return (
    <section className="product-detail padding">
      <figure className="product-detail-image">
        <img
          src={`http://localhost:5000${productDetail.image}`}
          alt={productDetail.name}
        />
      </figure>
      <article className="product-detail-info">
        <div className="product-detail-info__name flex-gap">
          <span className="fas fa-microchip"></span>
          <h2 className="margin-bottom">{productDetail.name}</h2>
        </div>
        <div className="product-detail-info__brand flex-gap">
          <span className="fas fa-tag"></span>
          <h3 className="margin-bottom light">{productDetail.brand}</h3>
        </div>
        <div className="product-detail-info__category flex-gap">
          <span className="fas fa-plug"></span>
          <h3 className="margin-bottom light">{productDetail.category}</h3>
        </div>
        <div className="product-detail-info__stock flex-gap">
          <span className="fas fa-box"></span>
          <h4 className="margin-bottom light">{productDetail.countInStock}</h4>
        </div>
        <div className="product-detail-info__description flex-gap">
          <span className="fas fa-info"></span>
          <p className="margin-bottom">{productDetail.description}</p>
        </div>
        <div className="product-detail-info__reviews flex-gap">
          <span className="far fa-thumbs-up"></span>
          <p className="margin-bottom light">{productDetail.numReviews}</p>
        </div>
        <div className="product-detail-info__rating flex-gap">
          <span className="fas fa-star"></span>
          <p className="margin-bottom light">{productDetail.rating}</p>
        </div>
        <div className="product-detail-info__price flex-gap">
          <span className="fas fa-hand-holding-usd"></span>
          <p className="margin-bottom">$ {productDetail.price}</p>
        </div>
        <Link to="/">
          <button className="product-card-buttons transition-button">
            <span className="fas fa-reply margin"></span>
            Back
          </button>
        </Link>
      </article>

      <style jsx>{`
        .product-detail {
          width: 100%;
          height: auto;
          display: grid;
          font-size: 1.6rem;
        }
        .margin-bottom {
          margin-bottom: 16px;
        }
        .product-detail-image {
          width: 100%;
          max-width: 420px;
          height: auto;
          margin: auto;
          margin-bottom: 16px;
        }
        .product-detail-info {
          width: 100%;
          height: auto;
          padding: 8px;
        }
        .product-detail-info__name {
          font-weight: var(--bold);
          font-size: var(--card-name);
          color: var(--black);
        }
        .product-detail-info__brand {
          font-weight: var(--light);
          font-size: var(--card-brand);
          color: var(--black);
        }
        .product-detail-info__price {
          font-family: var(--font-display);
          font-size: var(--card-price);
          font-weight: var(--bold);
          color: var(--black);
        }
        .light {
          font-weight: var(--medium);
          align-items: center;
          color: var(--black);
          font-size: var(--card-items);
        }
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
        .margin {
          margin-right: 6px;
        }
        @media (min-width: 900px) {
          .product-detail {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};
