import React from "react";
import styled from "styled-components";
import "./product.css";
import currencyFormatter from "../../helper/currencyFormatter";
import { ProductConsumer } from "../../context";

const Product = ({ product }) => {
  const { id, title, img, price, inCart, brand, color } = product;

  return (
    <ProductWrapper className="product-wrapper">
      <div className="product-card-container">
        <ProductConsumer>
          {(val) => (
            <div className="product-card">
              <div className="card-img-container">
                <img src={img} alt="product" className="card-img" />
                <div className="card-footer">
                  <p className="card-footer-title">{title}</p>
                  <div className="card-footer-body">
                    <p>
                      <strong>Marka: </strong>
                      {brand}
                    </p>
                    <p>
                      <strong>Renk: </strong>
                      {color}
                    </p>
                  </div>
                  <div className="card-footer-price-container">
                    <p className="card-footer-price">
                      {currencyFormatter(price)} TL
                    </p>
                    <span className="card-footer-discount">
                      <del> {currencyFormatter((price * 100) / 88)} TL</del>{" "}
                      <span>12%</span>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  val.addToCart(id);
                }}
              >
                {inCart ? (
                  <button className=" already-incart" disabled>
                    {" "}
                    Bu ürünü sepete ekleyemezsiniz
                  </button>
                ) : (
                  <button className="incart-text"> Sepete Ekle</button>
                )}
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    </ProductWrapper>
  );
};
const ProductWrapper = styled.div`
  .product-card {
    border-color: transparent;
    transition: all 1s linear;
    width: 266px;
  }
  .card-footer {
    border-color: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .product-card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    .cart-btn {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      margin-bottom: 10px;
    }
    .card-footer-body {
      display: none;
    }
    .card-footer-price-container {
      display: none;
    }
  }
  .card-img-container {
    position: relative;
    overflow: hidden;
    margin-top: 3px;
  }
  .card-img {
    width: 224px;
  }
  .card-img-container:hover .card-img {
  }
`;

export default Product;
