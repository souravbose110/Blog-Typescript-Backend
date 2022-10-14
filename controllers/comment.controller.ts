import { Request, Response } from "express";
import { createCommentService, deleteCommentService } from "../services";

export const createComment = async (req: Request, res: Response) => {
    const _postId = req.params.postId;
    const postId: number = +_postId;
    const _comment = req.body.comment;
    const comment: string = _comment;

    const response = await createCommentService({
        comment_content: comment,
        post_id: postId,
    });

    res.status(201).json(response);
};

export const deleteComment = async (req: Request, res: Response) => {
    const id = req.params.commentId;
    const _id: number = +id;

    const response = await deleteCommentService(_id);

    res.status(200).json(response);
};
