import React, { useState } from "react";
import "./Header.css";
import Basket from "../Basket/Basket";

function Header() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleBasketClick = () => {
    setIsBasketOpen(true);
  };

  const removeFromBasket = (productId) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.id !== productId
    );
    setSelectedProducts(updatedProducts);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img
            alt="Company Logo"
            src="../../../public/images/logo.png" // Corrected the src attribute
          />
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#news">News</a>
          <a href="#contact">Contact As</a>
        </nav>
        <box-icon
          type="solid"
          name="basket"
          className="basket"
          onClick={handleBasketClick}
        ></box-icon>
        <Basket
          isOpen={isBasketOpen}
          onClose={() => setIsBasketOpen(false)}
          selectedProducts={selectedProducts}
          removeFromBasket={removeFromBasket}
        />
      </header>
    </>
  );
}

export default Header;
