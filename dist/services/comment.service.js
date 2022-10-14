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
exports.deleteCommentService = exports.createCommentService = void 0;
const DBConfig_1 = require("../config/DBConfig");
const createCommentService = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        INSERT INTO comment (comment_content, post_id) 
        VALUES (
            "${comment.comment_content}",
            "${comment.post_id}"
        )
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.createCommentService = createCommentService;
const deleteCommentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        DELETE FROM comment WHERE comment_id = "${id}"
    `;
    yield DBConfig_1.pool.query(query);
    const response = {
        message: "Comment deleted successfully",
        success: true,
    };
    return response;
});
exports.deleteCommentService = deleteCommentService;
