import express from "express";
import { userSignup } from "../controllers/signup.js";
const router = express.Router();

router.post("/", userSignup);

export default router;
