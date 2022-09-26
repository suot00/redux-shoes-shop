import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NoMatch from "./pages/NoMatch/NoMatch";
import ProductList from "./components/Products/ProductList/ProductList";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/men" element={<ProductList />}></Route>
        <Route path="/women" element={<ProductList />}></Route>
        <Route path="/kid" element={<ProductList />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
