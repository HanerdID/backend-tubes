import express from "express";
import {
    getPengguna
} from "../controllers/Pengguna.js";

const router = express.Router();

router.get("/pengguna", getPengguna);

export default router;