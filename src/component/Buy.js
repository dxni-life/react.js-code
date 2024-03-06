import React, { useState } from 'react';
import './BuyItems.css';
import Cart from './Cart';
import ProductList from './ProductList';

function Buy() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    const adjustQuantity = (productId, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ));
    };

    return (
        <div className="BuyItems">
          {/* //  <h1>Store</h1> */}
            <p>Welcome to our gardening store! Here you can find a variety of products to enhance your gardening experience, including compost, pots, spray bottles, and more. Browse our selection and add items to your cart.</p>
            <ProductList addToCart={addToCart} />
            <Cart 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                adjustQuantity={adjustQuantity} 
            />


<footer className="footer">
        <p>© {new Date().getFullYear()} LeafyLux - All rights reserved.</p>
      </footer>
        </div>
    );
}

export default Buy;
