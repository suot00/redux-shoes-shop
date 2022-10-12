import React, { useState, useEffect } from "react";
import ProductList from "../../components/Products/ProductList/index";
import Footer from "../../components/Footer";
import AboutPage from "../../components/AboutPage";
import Service from "../../components/Service/index";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    let response = await axios(`http://localhost:3000/api/products`);
    let productData = await response.data.products;
    setProducts(productData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <AboutPage />
      <div>
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
        <div style={{ display: "flex" }}>
          {products.map((product, index) => (
            <ProductList key={index} data={product} />
          ))}
        </div>

        <p
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "4em",
            paddingRight: "5em",
          }}
        >
          <a href="#">View all new arrivals</a>
        </p>
      </div>
      {/* <Service /> */}
      <Footer />
    </>
  );
};

export default HomePage;
