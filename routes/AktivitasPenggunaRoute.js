import express from "express";
import { getAktivitasPengguna } from "../controllers/AktivitasPengguna.js";

const router = express.Router();

router.get("/AktivitasPengguna", getAktivitasPengguna);

export default router;
