import React from 'react';

function Cart({ cartItems, removeFromCart, adjustQuantity }) {
  const formatPrice = (price) => {
    return `£${price.toFixed(2)}`;
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>Price: {formatPrice(item.price)} x {item.quantity}</p>
          <p>Subtotal: {formatPrice(item.price * item.quantity)}</p>
          <button onClick={() => adjustQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
          <button onClick={() => adjustQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total">
        <p>Total: {formatPrice(totalPrice)}</p>
        <button className="checkout-button">Check Out</button>
      </div>
    </div>
  );
}

export default Cart;
