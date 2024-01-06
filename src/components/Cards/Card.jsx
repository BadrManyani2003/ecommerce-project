import React from 'react';
import './Card.css';

function Card({ image, title, price, addToBasket }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
      <button className='add-to-panier' onClick={addToBasket}>
        Ajouter au Basket
      </button>
    </div>
  );
}

export default Card;
