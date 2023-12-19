import express from "express";
import { getDetailTransaksi } from "../controllers/DetailTransaksi.js";

const router = express.Router();

router.get("/DetailTransaksi", getDetailTransaksi);

export default router;
