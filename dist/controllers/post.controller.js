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
exports.searchPosts = exports.deletePost = exports.updatePost = exports.getPostsById = exports.getAllPosts = exports.getPostsByCategory = exports.getPostsByUser = exports.createPost = void 0;
const services_1 = require("../services");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _userId = req.params.userId;
    const userId = +_userId;
    const _categoryId = req.params.categoryId;
    const categoryId = +_categoryId;
    const _title = req.body.title;
    const title = _title;
    const _content = req.body.content;
    const content = _content;
    const date = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");
    const response = yield (0, services_1.createPostService)({
        post_content: content,
        post_date: date,
        post_image: "",
        post_title: title,
        category_id: categoryId,
        user_id: userId,
    });
    res.status(201).json(response);
});
exports.createPost = createPost;
const getPostsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _userId = req.params.userId;
    const userId = +_userId;
    const response = yield (0, services_1.getPostsByUserService)(userId);
    res.status(200).json(response);
});
exports.getPostsByUser = getPostsByUser;
const getPostsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _categoryId = req.params.categoryId;
    const categoryId = +_categoryId;
    const response = yield (0, services_1.getPostsByCategoryService)(categoryId);
    res.status(200).json(response);
});
exports.getPostsByCategory = getPostsByCategory;
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const _pageNumber = req.params.pageNumber;
    // const pageNumber: number = +_pageNumber;
    // const _pageSize = req.params.pageSize;
    // const pageSize: number = +_pageSize;
    // const sortBy = req.params.sortBy;
    // const sortDir = req.params.sortDir;
    const response = yield (0, services_1.getAllPostsService)();
    res.status(200).json(response);
});
exports.getAllPosts = getAllPosts;
const getPostsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _postId = req.params.postId;
    const postId = +_postId;
    const response = (0, services_1.getPostsByIdService)(postId);
    res.status(200).json(response);
});
exports.getPostsById = getPostsById;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _postId = req.params.postId;
    const postId = +_postId;
    const post = req.body;
    const response = (0, services_1.updatePostService)(postId, post);
    res.status(200).json(response);
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _postId = req.params.postId;
    const postId = +_postId;
    const response = (0, services_1.deletePostService)(postId);
    res.status(200).json(response);
});
exports.deletePost = deletePost;
const searchPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const keyword = req.params.keyword;
    const response = yield (0, services_1.searchPostsService)(keyword);
    res.status(200).json(response);
});
exports.searchPosts = searchPosts;
