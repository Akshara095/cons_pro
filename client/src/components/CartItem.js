import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <div className="cart-item-info">
        <span>{item.name}</span>
        <span className="quantity">Quantity: {item.quantity}</span>
        <span>${item.price}</span>
      </div>
    </div>
  );
};

export default CartItem;
