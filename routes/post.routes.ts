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

const router: Router = express.Router();

router.post("/user/:userId/category/:categoryId/post", createPost);
router.get("/user/:userId/post", getPostsByUser);
router.get("/category/:categoryId/post", getPostsByCategory);
router.get("/post", getAllPosts);
router
    .route("/post/:postId")
    .get(getPostsById)
    .put(updatePost)
    .delete(deletePost);

router.get("/post/search/:keyword", searchPosts);

export default router;
