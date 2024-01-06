// Basket.jsx
import React from 'react';
import './Basket.css';

function Basket({ isOpen, onClose, selectedProducts, removeFromBasket }) {
  return (
    <div className={`basket-container ${isOpen ? 'open' : ''}`}>
      <div className="basket-header">
        <h2>Collectibles</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className="basket-items">
        {selectedProducts && selectedProducts.map((product, index) => (
          <div key={index} className="basket-item">
            <img src={product.image} alt={product.title} />
            <div className="item-details">
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => removeFromBasket(product.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
