import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import HomePage from "./pages/HomePage/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./components/Products/index";
import NoMatch from "./pages/NoMatch/index";
import ProductDetail from "./components/Products/ProductDetail/index";
import "antd/dist/antd.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/men" element={<ProductDetail />}></Route>
          <Route path="/women" element={<Products />}></Route>
          {/* <Route path="/kid" element={<ProductList />}></Route>  */}
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
