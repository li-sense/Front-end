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
        </Routes>
        <Components.Footer />
      </Router>
    </>
  );
};

export default RouterComponent;
