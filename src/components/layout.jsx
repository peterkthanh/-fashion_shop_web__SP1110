import React from "react";
import RoutesLayout from "../routes/RoutesLayout";
import ProductViewModel from "./ProductViewModal";
import Header from "./Header";
import Footer from "./Footer";

const layout = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="main">
          <RoutesLayout />
        </div>
      </div>
      <Footer />
      <ProductViewModel />
    </div>
  );
};

export default layout;
