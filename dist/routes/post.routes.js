"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.post("/user/:userId/category/:categoryId/post", controllers_1.createPost);
router.get("/user/:userId/post", controllers_1.getPostsByUser);
router.get("/category/:categoryId/post", controllers_1.getPostsByCategory);
router.get("/post", controllers_1.getAllPosts);
router
    .route("/post/:postId")
    .get(controllers_1.getPostsById)
    .put(controllers_1.updatePost)
    .delete(controllers_1.deletePost);
router.get("/post/search/:keyword", controllers_1.searchPosts);
exports.default = router;
