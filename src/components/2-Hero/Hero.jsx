import React from "react";
import './Hero.css'
function Hero({ onButtonClick }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our New Collection</h1>
          <p>Discover the latest and greatest products in our store.</p>
          <button className='btn' onClick={onButtonClick}>
            Explore New Products
          </button>
        </div>
        <div className="img">
            <img src="../../../public/images/logo.png" alt="" srcSet="" />
        </div>
      </section>
    </>
  );
}

export default Hero;
