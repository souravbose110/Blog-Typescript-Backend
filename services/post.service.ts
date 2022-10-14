import { pool } from "../config/DBConfig";
import { Post } from "../types";

export const createPostService = async (post: Post) => {
    const query = `
        INSERT INTO post (post_content, post_date, post_image, post_title, category_id, user_id)
        VALUES (
            "${post.post_content}",
            "${post.post_date}",
            "${post.post_image}",
            "${post.post_title}",
            "${post.category_id}",
            "${post.user_id}"
        )
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getPostsByUserService = async (id: number) => {
    const query = `
        SELECT post.post_id, post.post_content, post.post_date, post.post_image, post.post_title, categories.category_id, categories.title, categories.description, user.id, user.name, user.email, user.about 
        FROM post, user, categories 
        WHERE user.id = post.user_id AND user.id = "${id}"
        ORDER BY post.post_date DESC
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getPostsByCategoryService = async (id: number) => {
    const query = `
        SELECT post.post_id, post.post_content, post.post_date, post.post_image, post.post_title, categories.category_id, categories.title, categories.description, user.id, user.name, user.email, user.about 
        FROM post, user, categories 
        WHERE categories.category_id = post.category_id AND categories.category_id = "${id}"
        ORDER BY post.post_date DESC
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getAllPostsService = async (
    pageNumber: number = 1,
    pageSize: number = 10,
    sortBy: string = "post_id",
    sortDir: string = "asc"
) => {
    if (sortDir !== "asc") {
        sortDir = "desc";
    }
    sortDir = sortDir.toUpperCase();
    // const query = `
    //     SELECT * FROM post
    //     ORDER BY "${sortBy}" "${sortDir}"
    //     OFFSET "${(pageNumber - 1) * pageSize}" ROWS
    //     FETCH NEXT "${pageSize}" ROWS ONLY
    // `;

    const query = `
        SELECT * FROM post
        ORDER BY "${sortBy}" "${sortDir}"
        OFFSET "${(pageNumber - 1) * pageSize}" ROWS
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getPostsByIdService = async (id: number) => {
    const query = `
        SELECT * from post WHERE post_id = "${id}"
    `;

    const response = await pool.query(query);

    return response[0];
};

export const updatePostService = async (id: number, post: Post) => {
    const query = `
        UPDATE post
        SET post_content = "${post.post_content}", post_date = "${post.post_date}", post_image = "${post.post_image}", post_title = "${post.post_title}"
        WHERE post_id = "${id}"
    `;

    const response = await pool.query(query);

    return response[0];
};

export const deletePostService = async (id: number) => {
    const query = `
        DELETE FROM post WHERE post_id = "${id}"
    `;

    await pool.query(query);
    const response = {
        message: "Post deleted successfully",
        success: true,
    };

    return response;
};

export const searchPostsService = async (keyword: string) => {
    const query = `
        SELECT * FROM post WHERE LOWER(post_title) LIKE CONCAT("${"%"}", "${keyword}", "${"%"}")
    `;

    const response = await pool.query(query);

    return response[0];
};
