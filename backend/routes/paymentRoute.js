import { Router } from "express";
const router = Router();
import {
  checkout,
  paymentVarification,
} from "../controllers/paymentController.js";

router.route("/checkout").post(checkout);
router.route("/paymentVarification").post(paymentVarification);

export default router;
