import { Request, Response } from "express";
import { pool } from "../config/DBConfig";
import {
    createPostService,
    deletePostService,
    getAllPostsService,
    getPostsByCategoryService,
    getPostsByIdService,
    getPostsByUserService,
    searchPostsService,
    updatePostService,
} from "../services";

export const createPost = async (req: Request, res: Response) => {
    const _userId = req.params.userId;
    const userId: number = +_userId;

    const _categoryId = req.params.categoryId;
    const categoryId: number = +_categoryId;

    const _title = req.body.title;
    const title: string = _title;
    const _content = req.body.content;
    const content = _content;
    const date: string = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

    const response = await createPostService({
        post_content: content,
        post_date: date,
        post_image: "",
        post_title: title,
        category_id: categoryId,
        user_id: userId,
    });

    res.status(201).json(response);
};

export const getPostsByUser = async (req: Request, res: Response) => {
    const _userId = req.params.userId;
    const userId: number = +_userId;

    const response = await getPostsByUserService(userId);

    res.status(200).json(response);
};

export const getPostsByCategory = async (req: Request, res: Response) => {
    const _categoryId = req.params.categoryId;
    const categoryId = +_categoryId;

    const response = await getPostsByCategoryService(categoryId);

    res.status(200).json(response);
};

export const getAllPosts = async (req: Request, res: Response) => {
    // const _pageNumber = req.params.pageNumber;
    // const pageNumber: number = +_pageNumber;

    // const _pageSize = req.params.pageSize;
    // const pageSize: number = +_pageSize;

    // const sortBy = req.params.sortBy;

    // const sortDir = req.params.sortDir;

    const response = await getAllPostsService();

    res.status(200).json(response);
};

export const getPostsById = async (req: Request, res: Response) => {
    const _postId = req.params.postId;
    const postId = +_postId;

    const response = getPostsByIdService(postId);

    res.status(200).json(response);
};

export const updatePost = async (req: Request, res: Response) => {
    const _postId = req.params.postId;
    const postId = +_postId;

    const post = req.body;

    const response = updatePostService(postId, post);

    res.status(200).json(response);
};

export const deletePost = async (req: Request, res: Response) => {
    const _postId = req.params.postId;
    const postId = +_postId;

    const response = deletePostService(postId);

    res.status(200).json(response);
};

export const searchPosts = async (req: Request, res: Response) => {
    const keyword = req.params.keyword;

    const response = await searchPostsService(keyword);

    res.status(200).json(response);
};
