import express from "express";
import { Login_user, Logout_user, RegisterUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login" , Login_user);
router.post("/register", RegisterUser);
router.get("/logout" , Logout_user);

export default router;