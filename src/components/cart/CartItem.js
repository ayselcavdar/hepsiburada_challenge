import React from "react";
import "./cart.css";

const CartItem = ({ item, value }) => {
  const { id, title, img } = item;
  const { removeItem } = value;
  return (
    <div className="cart-item-container">
      <div className="cart-item-img">
        <img
          src={img}
          style={{ width: "7rem", height: "7rem" }}
          alt="products"
        />
      </div>
      <div className="rigth-side-container">
        <div className="cart-item-name"><span>{title}</span></div>
        {/* <div className="empty-div"></div> */}
        <div className="cart-item-button">
          <button onClick={(e) => window.confirm("Bu ürünü silmek istediğinize emin misiniz ?") && removeItem(id)} className="cart-button">
            {" "}
            Kaldır{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
