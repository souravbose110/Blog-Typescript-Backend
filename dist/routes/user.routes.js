"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.route("/").get(auth_middleware_1.protect, controllers_1.getAllUsers).post(controllers_1.createUser);
router
    .route("/:id")
    .get(auth_middleware_1.protect, controllers_1.getUserById)
    .put(auth_middleware_1.protect, controllers_1.updateUser)
    .delete(auth_middleware_1.protect, controllers_1.deleteUser);
exports.default = router;
