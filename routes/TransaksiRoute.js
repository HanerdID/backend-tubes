import express from "express";
import { getTransaksi } from "../controllers/Transaksi.js";

const router = express.Router();

router.post("/transaksi", getTransaksi);

export default router;
