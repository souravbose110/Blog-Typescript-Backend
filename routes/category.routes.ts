import express, { Router } from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
} from "../controllers";

const router: Router = express.Router();

router.route("/").get(getAllCategories).post(createCategory);
router
    .route("/:id")
    .get(getCategoryById)
    .put(updateCategory)
    .delete(deleteCategory);

export default router;
