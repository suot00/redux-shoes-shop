import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import HomePage from "./pages/HomePage/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./components/Products/index";
import NoMatch from "./pages/NoMatch/index";
import ProductDetail from "./components/Products/ProductDetail/index";
import ProductCart from "./components/Products/ProductCart/index";
import "antd/dist/antd.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/index";
function App() {
  const [products, setProducts] = useState([]);
  async function fetchData() {
    let response = await axios(`http://localhost:3000/api/products`);
    let productData = await response.data.products;
    setProducts(productData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleClearAll = () => {
    setCartItems([]);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route index element={<HomePage products={products} />}></Route>
          <Route
            path="/newArrivals"
            element={
              <Products
                products={products}
                handleAddProduct={handleAddProduct}
              />
            }
          ></Route>
          <Route
            path="/shoppingCart"
            element={
              <ProductCart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleClearAll={handleClearAll}
              />
            }
          ></Route>

          <Route
            path="/products/:productId"
            element={
              <ProductDetail
                products={products}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          ></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
