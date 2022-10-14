import express, { Router } from "express";
import { createComment, deleteComment } from "../controllers";

const router: Router = express.Router();

router.post("/post/:postId/comment", createComment);
router.delete("/comment/:commentId", deleteComment);

export default router;
