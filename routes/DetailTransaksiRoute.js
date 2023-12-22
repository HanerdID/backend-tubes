import express from "express";
import {
  getDetailTransaksi,
  getDetailTransaksiById,
  updateDetailTransaksi,
  deleteDetailTransaksi,
  updateMetodePembayaran,
} from "../controllers/DetailTransaksi.js";

const router = express.Router();

router.get("/DetailTransaksi", getDetailTransaksi);
router.get("/DetailTransaksi/:id", getDetailTransaksiById);
router.put("/updateDetailTransaksi/:id", updateDetailTransaksi);
router.put("/updateMetodePembayaran/:id", updateMetodePembayaran);
router.delete("/deleteDetailTransaksi/:id", deleteDetailTransaksi);
export default router;
