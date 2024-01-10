import React from "react";
import axios from "axios";

const Payment = () => {
  const amount = 10000;

  const chackoutHandler = async (e) => {
    e.preventDefault();

    const {
      data: { key },
    } = await axios.get("http://localhost:5001/getkey");
    // console.log(key);
    const {
      data: { order },
    } = await axios.post("http://localhost:5001/checkout", {
      amount,
    });

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Payment Gateway",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/86796998?v=4",
      order_id: order.id,
      callback_url: "http://localhost:5001/paymentVarification",
      prefill: {
        name: "Rajeev Ranjan",
        email: "er.rajeev.mca@gmail.com",
        contact: "8084602358",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img
              src="https://dummyimage.com/600x400/ccc/000&text=Product+Image"
              className="card-img-top"
              alt="Dummy Product"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy Product</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="mb-3">
                <strong>Price: ₹ {amount}</strong>
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={chackoutHandler}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
