"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.post("/post/:postId/comment", auth_middleware_1.protect, controllers_1.createComment);
router.delete("/comment/:commentId", auth_middleware_1.protect, controllers_1.deleteComment);
exports.default = router;
