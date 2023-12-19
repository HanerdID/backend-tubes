import express from "express";
import { Login } from "../controllers/Auth.js";
import { isAuthenticated } from "../middleware/AuthPengguna.js";

const router = express.Router();

// router.get("/me", isAuthenticated, Me);
router.post("/login", Login);
// router.delete("/logout", logOut);

export default router;
