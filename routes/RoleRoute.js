import express from "express";
import { getRole } from "../controllers/Role.js";

const router = express.Router();

router.get("/role", getRole);

export default router;
