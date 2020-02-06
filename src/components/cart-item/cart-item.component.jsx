import React from "react";
import "./cart-item.style.scss";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <div className="name">{name}</div>
      <div className="price">
        {quantity} x ${price}
      </div>
    </div>
  </div>
);
export default CartItem;
