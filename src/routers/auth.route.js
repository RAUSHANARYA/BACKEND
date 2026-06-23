import express from "express";
import { Login_user , Logout_user , Register_user } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login" , Login_user);
router.post("/register" , Register_user);
router.get("/logout" , Logout_user);

export default router;