import express, { Router } from "express";
import { createToken } from "../controllers";

const router: Router = express.Router();

router.post("/login", createToken);

export default router;
