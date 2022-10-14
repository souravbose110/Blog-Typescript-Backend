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
exports.deleteCategory = exports.updateCategory = exports.getCategoryById = exports.getAllCategories = exports.createCategory = void 0;
const services_1 = require("../services");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.body;
    const response = yield (0, services_1.createCategoryService)(category);
    res.status(201).json(response);
});
exports.createCategory = createCategory;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, services_1.getAllCategoriesService)();
    res.status(200).json(response);
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const _id = +id;
    const response = yield (0, services_1.getCategoryByIdService)(_id);
    res.status(200).json(response);
});
exports.getCategoryById = getCategoryById;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.body;
    const id = req.params.id;
    const _id = +id;
    const response = yield (0, services_1.updateCategoryService)(_id, category);
    res.status(200).json(response);
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const _id = +id;
    const response = yield (0, services_1.deleteCategoryService)(_id);
    res.status(200).json(response);
});
exports.deleteCategory = deleteCategory;
