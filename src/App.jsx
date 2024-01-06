import 'boxicons';
import React, { useState } from 'react';
import Header from './components/1-Header/Header';
import Hero from './components/2-Hero/Hero';
import Product from './components/3-Product/Product';
import ContactAs from './components/4-Contact As/ContactAs';
import Footer from './components/5-Footer/Footer';

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToBasket = (selectedProduct) => {
    setSelectedProducts([...selectedProducts, selectedProduct]);
  };

  return (
    <div className="app">
      <Header />
      <Hero />
      <Product addToBasket={addToBasket} />
      <ContactAs />
      <Footer />
    </div>
  );
}

export default App;
