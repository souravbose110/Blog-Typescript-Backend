"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.post("/user/:userId/category/:categoryId/post", auth_middleware_1.protect, controllers_1.createPost);
router.get("/user/:userId/post", auth_middleware_1.protect, controllers_1.getPostsByUser);
router.get("/category/:categoryId/post", auth_middleware_1.protect, controllers_1.getPostsByCategory);
router.get("/post", auth_middleware_1.protect, controllers_1.getAllPosts);
router
    .route("/post/:postId")
    .get(auth_middleware_1.protect, controllers_1.getPostsById)
    .put(auth_middleware_1.protect, controllers_1.updatePost)
    .delete(auth_middleware_1.protect, controllers_1.deletePost);
router.get("/post/search/:keyword", auth_middleware_1.protect, controllers_1.searchPosts);
exports.default = router;
