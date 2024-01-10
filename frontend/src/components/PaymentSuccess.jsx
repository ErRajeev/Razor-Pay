import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const searchQuery = useSearchParams()[0];
  const reference_no = searchQuery.get("reference");

  const [counter, setCounter] = useState(5);

  const SessionHandler = () => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    setTimeout(() => {
      navigate("/");
    }, counter * 1000);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    SessionHandler();
  }, [counter, navigate]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h1 className="display-4 text-center mb-4">
                Payment Receipt Page
              </h1>
              <h4 className="text-center mb-4">
                Your payment has been completed successfully
              </h4>
              <p className="lead text-center">
                Your Payment ID is: {reference_no}
              </p>
              <p className="text-center">
                Now you will be redirected to the Home page in {counter}{" "}
                seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
