import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Carlog from "../pages/catalog";
import Product from "../pages/Product";

function RoutesLayout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Carlog />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  );
}

export default RoutesLayout;
