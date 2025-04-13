import React, { useEffect, useState } from 'react';
import axios from '../utils/auth1';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(response => setCart(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
