import express from "express";
import {
  getDetailTransaksi,
  getDetailTransaksiById,
  updateDetailTransaksi,
  deleteDetailTransaksi,
} from "../controllers/DetailTransaksi.js";

const router = express.Router();

router.get("/DetailTransaksi", getDetailTransaksi);
router.get("/DetailTransaksi/:id", getDetailTransaksiById);
router.put("/updateDetailTransaksi/:id", updateDetailTransaksi);
router.delete("/deleteDetailTransaksi/:id", deleteDetailTransaksi);
export default router;
