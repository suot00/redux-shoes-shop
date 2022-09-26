import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Deshboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NoMatch from "./pages/NoMatch/NoMatch";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
