import { pool } from "../config/DBConfig";
import { Comment } from "../types";

export const createCommentService = async (comment: Comment) => {
    const query = `
        INSERT INTO comment (comment_content, post_id) 
        VALUES (
            "${comment.comment_content}",
            "${comment.post_id}"
        )
    `;

    const response = await pool.query(query);

    return response[0];
};

export const deleteCommentService = async (id: number) => {
    const query = `
        DELETE FROM comment WHERE comment_id = "${id}"
    `;

    await pool.query(query);

    const response = {
        message: "Comment deleted successfully",
        success: true,
    };

    return response;
};
