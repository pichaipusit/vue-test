import express from "express";
import { signup } from "../controllers/user";
const router = express.Router();

router.get("/", signup);

export default router;
