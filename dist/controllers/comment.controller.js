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
exports.deleteComment = exports.createComment = void 0;
const services_1 = require("../services");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _postId = req.params.postId;
    const postId = +_postId;
    const _comment = req.body.comment;
    const comment = _comment;
    const response = yield (0, services_1.createCommentService)({
        comment_content: comment,
        post_id: postId,
    });
    res.status(201).json(response);
});
exports.createComment = createComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.commentId;
    const _id = +id;
    const response = yield (0, services_1.deleteCommentService)(_id);
    res.status(200).json(response);
});
exports.deleteComment = deleteComment;
