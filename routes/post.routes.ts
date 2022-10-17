import express, { Router } from "express";
import {
    createPost,
    deletePost,
    getAllPosts,
    getPostsByCategory,
    getPostsById,
    getPostsByUser,
    searchPosts,
    updatePost,
} from "../controllers";
import { protect } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.post("/user/:userId/category/:categoryId/post", protect, createPost);
router.get("/user/:userId/post", protect, getPostsByUser);
router.get("/category/:categoryId/post", protect, getPostsByCategory);
router.get("/post", protect, getAllPosts);
router
    .route("/post/:postId")
    .get(protect, getPostsById)
    .put(protect, updatePost)
    .delete(protect, deletePost);

router.get("/post/search/:keyword", protect, searchPosts);

export default router;
