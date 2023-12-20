import express from "express";
import {
  getDetailTransaksi,
  getDetailTransaksiById,
} from "../controllers/DetailTransaksi.js";

const router = express.Router();

router.get("/DetailTransaksi", getDetailTransaksi);
router.get("/DetailTransaksi/:id", getDetailTransaksiById);

export default router;
