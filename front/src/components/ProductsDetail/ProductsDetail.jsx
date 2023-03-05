import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../ProductsDetail/ProductsDetail.css'

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

     
    </section>
  );
};
