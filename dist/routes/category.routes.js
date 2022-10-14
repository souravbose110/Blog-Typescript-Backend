"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.route("/").get(controllers_1.getAllCategories).post(controllers_1.createCategory);
router
    .route("/:id")
    .get(controllers_1.getCategoryById)
    .put(controllers_1.updateCategory)
    .delete(controllers_1.deleteCategory);
exports.default = router;
