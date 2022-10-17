import express, { Router } from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from "../controllers";
import { protect } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.route("/").get(protect, getAllCategories).post(protect, createCategory);
router
    .route("/:id")
    .get(protect, getCategoryById)
    .put(protect, updateCategory)
    .delete(protect, deleteCategory);

export default router;
