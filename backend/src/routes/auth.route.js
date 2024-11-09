import { Router } from "express";
import { authCallback } from "../controller/auth.controller.js";

const router = Router();

router.post("/callback", authCallback);

export default router;
