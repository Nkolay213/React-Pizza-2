import React, { useState } from "react";
import "./scss/app.scss";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <NotFound /> */}
      </div>
    </div>
  );
}

export default App;
