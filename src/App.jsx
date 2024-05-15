import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div >
      <div>
        <Navbar />
      </div>

      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
