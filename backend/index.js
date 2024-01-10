import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import router from "./routes/paymentRoute.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8001;

export const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

app.listen(PORT, () => {
  console.log(`server started at Port ${PORT}`);
});
app.use("/getkey", (req, res) => {
  res.status(200).json({ key: process.env.KEY_ID });
});

app.use(router);
