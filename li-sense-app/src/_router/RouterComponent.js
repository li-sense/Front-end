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
          <Route exact path="/product/creatproduct" element={<Pages.CreatProduct />} />
          <Route exact path="/product/:id/edit" element={<Pages.EditProduct />} />
          <Route exact path="/search" element={<Pages.SearchProduct />} />
          <Route exact path="/profile" element={<Pages.Profile />} />
          <Route exact path="/profile/config" element={<Pages.UserConfig />} />
          <Route exact path="/profile/beAseller" element={<Pages.BeAseller />} />
          <Route exact path="/cart" element={<Pages.Checkout />} />
          <Route exact path="/cart/payment" element={<Pages.PaymentUserInfo />} />
          <Route exact path="/cart/payment/boleto" element={<Pages.Boleto />} />
          <Route exact path="/cart/payment/credit" element={<Pages.CreditCard />} />
        
        </Routes>
        <Components.Footer />
      </Router>
    </>
  );
};

export default RouterComponent;
