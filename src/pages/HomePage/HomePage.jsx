import React from "react";
import ProductList from "../../components/Products/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";
import AboutPage from "../../components/AboutPage/AboutPage";
const HomePage = () => {
  return (
    <>
      <AboutPage />
      <ProductList />
      <Footer />
    </>
  );
};

export default HomePage;
