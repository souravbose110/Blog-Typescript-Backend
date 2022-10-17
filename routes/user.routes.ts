import express, { Router } from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    getUserById,
    updateUser,
} from "../controllers";
import { protect } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.route("/").get(protect, getAllUsers).post(createUser);
router
    .route("/:id")
    .get(protect, getUserById)
    .put(protect, updateUser)
    .delete(protect, deleteUser);

export default router;
