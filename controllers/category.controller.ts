import { Request, Response } from "express";
import {
    createCategoryService,
    deleteCategoryService,
    getAllCategoriesService,
    getCategoryByIdService,
    updateCategoryService,
} from "../services";

export const createCategory = async (req: Request, res: Response) => {
    const category = req.body;

    const response = await createCategoryService(category);

    res.status(201).json(response);
};

export const getAllCategories = async (req: Request, res: Response) => {
    const response = await getAllCategoriesService();

    res.status(200).json(response);
};

export const getCategoryById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const _id: number = +id;

    const response = await getCategoryByIdService(_id);

    res.status(200).json(response);
};

export const updateCategory = async (req: Request, res: Response) => {
    const category = req.body;
    const id = req.params.id;
    const _id: number = +id;

    const response = await updateCategoryService(_id, category);

    res.status(200).json(response);
};

export const deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id;
    const _id: number = +id;

    const response = await deleteCategoryService(_id);

    res.status(200).json(response);
};
