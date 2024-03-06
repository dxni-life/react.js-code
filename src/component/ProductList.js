import React, { useState } from 'react'; // Fixed import statement

const conversionRate = 0.75; // Conversion rate from USD to GBP

const products = [
  { id: 1, name: 'Decorative Pot', price: 15.99 * conversionRate, image: '/assets/plant1.jpg' },
  { id: 2, name: 'House Plant Compost', price: 7.99 * conversionRate, image: '/assets/plant2.jpg' },
  { id: 3, name: 'Spray Bottle', price: 5.32 * conversionRate, image: '/assets/plant3.jpg' },
  { id: 4, name: 'item 4', price: 0.00 * conversionRate, image: '/assets/plant4.jpg' },
  { id: 5, name: 'item 5', price: 0.00 * conversionRate }, 
  { id: 6, name: 'item 6', price: 0.00 * conversionRate },
  { id: 7, name: 'item 7', price: 0.00 * conversionRate },
  { id: 8, name: 'item 8', price: 0.00 * conversionRate },
  { id: 9, name: 'item 9', price: 0.00 * conversionRate }
];

const ProductList = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const formatPrice = (price) => `£${price.toFixed(2)}`;

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          {product.image && (
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} onClick={() => handleProductClick(product)} />
          )}
          <h3>{product.name}</h3>
          <p>Price: {formatPrice(product.price)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.name} Details</h2>
          {/* For demonstration purposes, adding a generic description */}
          <p>Description: This is a {selectedProduct.name}.</p>
          <p>Price: {formatPrice(selectedProduct.price)}</p>
          {/* Include more details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProductList;
