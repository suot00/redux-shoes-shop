import React, { useState, useEffect } from "react";
import ProductList from "../../components/Products/ProductList/index";
import Footer from "../../components/Footer";
import AboutPage from "../../components/AboutPage";
import Service from "../../components/Service/index";
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
      <div style={{ margin: "3em" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "32px",
            marginBottom: "1em",
            marginLeft: "1em",
          }}
        >
          All the new arrivals
        </h2>
        <div style={{ display: "flex", width: "100%" }}>
          {products.map((product, index) => (
            <ProductList key={index} data={product} />
          ))}
        </div>
        <p>View all new arrivals</p>
      </div>
      <Service />
      <Footer />
    </>
  );
};

export default HomePage;
