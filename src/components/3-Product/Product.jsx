
import React, { useState } from 'react';
import './Product.css';
import Card from '../Cards/Card';

function Product({ addToBasket }) {
  const allCategories = ["All", "Category 1", "Category 2"];

  // Your product data
  const initialProducts = [
    {
      id: 1,
      title: "Product 1",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 3,
      title: "Product 3",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 4,
      title: "Product 4",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 5,
      title: "Product 5",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 6,
      title: "Product 6",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 7,
      title: "Product 7",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 8,
      title: "Product 8",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 9,
      title: "Product 9",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 10,
      title: "Product 10",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 11,
      title: "Product 11",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 12,
      title: "Product 12",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 13,
      title: "Product 13",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 14,
      title: "Product 14",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 15,
      title: "Product 15",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 16,
      title: "Product 16",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 17,
      title: "Product 17",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 18,
      title: "Product 18",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
    {
      id: 19,
      title: "Product 19",
      price: 20.99,
      image: "../../../public/images/jaket.jpg",
      category: "Category 1",
    },
    {
      id: 20,
      title: "Product 20",
      price: 15.49,
      image: "../../../public/images/jaket.jpg",
      category: "Category 2",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const searchFilteredProducts = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="product">
      <h1>Product</h1>

      <div className="category-buttons">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="search">
        <input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <box-icon name="search-alt"></box-icon>
      </div>

      <div className="product-list">
        {searchFilteredProducts.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            addToBasket={() => addToBasket(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default Product;