"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHandler = exports.PostHandler = exports.CommentHandler = exports.CategoryHandler = exports.UserHandler = void 0;
var user_routes_1 = require("./user.routes");
Object.defineProperty(exports, "UserHandler", { enumerable: true, get: function () { return __importDefault(user_routes_1).default; } });
var category_routes_1 = require("./category.routes");
Object.defineProperty(exports, "CategoryHandler", { enumerable: true, get: function () { return __importDefault(category_routes_1).default; } });
var comment_routes_1 = require("./comment.routes");
Object.defineProperty(exports, "CommentHandler", { enumerable: true, get: function () { return __importDefault(comment_routes_1).default; } });
var post_routes_1 = require("./post.routes");
Object.defineProperty(exports, "PostHandler", { enumerable: true, get: function () { return __importDefault(post_routes_1).default; } });
var auth_routes_1 = require("./auth.routes");
Object.defineProperty(exports, "AuthHandler", { enumerable: true, get: function () { return __importDefault(auth_routes_1).default; } });
