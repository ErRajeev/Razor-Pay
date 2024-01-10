import { instance } from "../index.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
  try {
    // console.log(req.body.amount);
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
      // receipt: "order_rcptid_11",
    };

    const order = await instance.orders.create(options);
    // console.log(order);
    res.status(200).json({
      order,
    });
  } catch (error) {
    console.error("Error during checkout:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const paymentVarification = async (req, res) => {
  try {
    // console.log(req.body);
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      // Data save to database

      res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        success: false,
      });
    }
  } catch (error) {
    // console.error("Error during payment verification:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
