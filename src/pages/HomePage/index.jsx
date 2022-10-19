import React from "react";
import ProductList from "../../components/Products/ProductList/index";

import AboutPage from "../../components/AboutPage";
import Service from "../../components/Service/index";
import { Link } from "react-router-dom";

const HomePage = ({ products }) => {
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
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
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
          <Link to="/newArrivals">View all new arrivals</Link>
        </p>
      </div>
      {/* <Service /> */}
    </>
  );
};

export default HomePage;
