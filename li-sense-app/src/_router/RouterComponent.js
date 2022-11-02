import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pages } from "../_pages/Pages";
import { Components } from "../_components/Components";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Components.Header />
        <Routes>
          <Route exact path="/" element={<Pages.Home />} />
          <Route exact path="/login" element={<Pages.Login />} />
          <Route exact path="/register" element={<Pages.Register />} />
          <Route exact path="/recovery" element={<Pages.RecoveryPassword />} />
          <Route exact path="/product/:id" element={<Pages.ProductDetails />} />
          <Route exact path="/profile" element={<Pages.Profile />} />
          <Route exact path="/profile/config" element={<Pages.UserConfig />} />
          <Route exact path="/cart" element={<Pages.Checkout />} />
          <Route exact path="/cart/payment" element={<Pages.PaymentUserInfo />} />
          <Route exact path="/cart/payment/boleto" element={<Pages.Boleto />} />
        </Routes>
        <Components.Footer />
      </Router>
    </>
  );
};

export default RouterComponent;
