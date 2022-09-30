import React, { useState, useEffect } from "react";
import ProductList from "../../components/Products/ProductList/index";
import Footer from "../../components/Footer";
import AboutPage from "../../components/AboutPage";
// import axios from "axios";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("/api/products", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();

      setProducts(data.products);
    }

    getProducts();
  }, []);

  return (
    <>
      <AboutPage />
      {products.map((product, index) => (
        <ProductList key={index} data={product} />
      ))}
      <Footer />
    </>
  );
};

export default HomePage;
