import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Home from "./screens/home/Home";
import Loader from "./layout/loader/Loader";
import Search from "./screens/Product/Search.js";
import Products from "./screens/Product/Product.js";
import ProductDetials from "./screens/Product/ProductDetails.js";
import LoginSignup from "./screens/user/LoginSignup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetials />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyWord" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
