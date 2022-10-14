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
exports.deleteCategoryService = exports.updateCategoryService = exports.getCategoryByIdService = exports.getAllCategoriesService = exports.createCategoryService = void 0;
const DBConfig_1 = require("../config/DBConfig");
const createCategoryService = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        INSERT INTO categories (title, description) 
        VALUES (
            "${category.title}",
            "${category.description}"
        )
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.createCategoryService = createCategoryService;
const getAllCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT * FROM categories
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getAllCategoriesService = getAllCategoriesService;
const getCategoryByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT * FROM categories WHERE category_id = "${id}"
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getCategoryByIdService = getCategoryByIdService;
const updateCategoryService = (id, category) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        UPDATE categories
        SET title = "${category.title}", description = "${category.description}"
        WHERE category_id = ${id}
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        DELETE FROM categories WHERE category_id = "${id}"
    `;
    yield DBConfig_1.pool.query(query);
    const response = {
        message: "category deleted successfully",
        success: true,
    };
    return response;
});
exports.deleteCategoryService = deleteCategoryService;
