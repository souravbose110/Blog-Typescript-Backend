import express, { Router } from "express";
import { createComment, deleteComment } from "../controllers";
import { protect } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.post("/post/:postId/comment", protect, createComment);
router.delete("/comment/:commentId", protect, deleteComment);

export default router;
