"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPostsService = exports.deletePostService = exports.updatePostService = exports.getPostsByIdService = exports.getAllPostsService = exports.getPostsByCategoryService = exports.getPostsByUserService = exports.createPostService = void 0;
const DBConfig_1 = require("../config/DBConfig");
const createPostService = (post) => __awaiter(void 0, void 0, void 0, function* () {
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
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.createPostService = createPostService;
const getPostsByUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT post.post_id, post.post_content, post.post_date, post.post_image, post.post_title, categories.category_id, categories.title, categories.description, user.id, user.name, user.email, user.about 
        FROM post, user, categories 
        WHERE user.id = post.user_id AND user.id = "${id}"
        ORDER BY post.post_date DESC
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getPostsByUserService = getPostsByUserService;
const getPostsByCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT post.post_id, post.post_content, post.post_date, post.post_image, post.post_title, categories.category_id, categories.title, categories.description, user.id, user.name, user.email, user.about 
        FROM post, user, categories 
        WHERE categories.category_id = post.category_id AND categories.category_id = "${id}"
        ORDER BY post.post_date DESC
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getPostsByCategoryService = getPostsByCategoryService;
const getAllPostsService = (pageNumber = 1, pageSize = 10, sortBy = "post_id", sortDir = "asc") => __awaiter(void 0, void 0, void 0, function* () {
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
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getAllPostsService = getAllPostsService;
const getPostsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT * from post WHERE post_id = "${id}"
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getPostsByIdService = getPostsByIdService;
const updatePostService = (id, post) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        UPDATE post
        SET post_content = "${post.post_content}", post_date = "${post.post_date}", post_image = "${post.post_image}", post_title = "${post.post_title}"
        WHERE post_id = "${id}"
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.updatePostService = updatePostService;
const deletePostService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        DELETE FROM post WHERE post_id = "${id}"
    `;
    yield DBConfig_1.pool.query(query);
    const response = {
        message: "Post deleted successfully",
        success: true,
    };
    return response;
});
exports.deletePostService = deletePostService;
const searchPostsService = (keyword) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT * FROM post WHERE LOWER(post_title) LIKE CONCAT("${"%"}", "${keyword}", "${"%"}")
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.searchPostsService = searchPostsService;
