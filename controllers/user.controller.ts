import { Request, Response } from "express";
import {
    createUserService,
    deleteUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
} from "../services";

export const createUser = async (req: Request, res: Response) => {
    const user = req.body;

    const response = await createUserService(user);

    res.status(201).json(response);
};

export const getAllUsers = async (req: Request, res: Response) => {
    const response = await getAllUsersService();

    res.status(200).json(response);
};

export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const _id: number = +id;

    const response = await getUserByIdService(_id);

    res.status(200).json(response);
};

export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const _id: number = +id;

    const user = req.body;

    const response = await updateUserService(_id, user);

    res.status(200).json(response);
};

export const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const _id: number = +id;

    const response = await deleteUserService(_id);

    res.status(200).json(response);
};
