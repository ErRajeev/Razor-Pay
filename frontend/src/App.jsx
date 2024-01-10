import React from "react";
import Payment from "./components/payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
