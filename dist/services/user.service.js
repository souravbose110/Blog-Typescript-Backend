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
exports.deleteUserService = exports.updateUserService = exports.getUserByIdService = exports.getAllUsersService = exports.createUserService = void 0;
const DBConfig_1 = require("../config/DBConfig");
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        INSERT INTO user (name, email, password, about) 
        VALUES (
            "${user.name}",
            "${user.email}",
            "${user.password}",
            "${user.about}"
        )
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.createUserService = createUserService;
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT * FROM user;
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        SELECT * FROM user WHERE id = "${id}"
    `;
    const response = yield DBConfig_1.pool.query(query);
    return response[0];
});
exports.getUserByIdService = getUserByIdService;
const updateUserService = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        UPDATE user
        SET name = "${user.name}", email = "${user.email}", password = "${user.password}"
        WHERE id = "${id}"
    `;
    const updatedUser = yield DBConfig_1.pool.query(query);
    return updatedUser;
});
exports.updateUserService = updateUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `
        DELETE FROM user WHERE id = "${id}"
    `;
    yield DBConfig_1.pool.query(query);
    const apiResponse = {
        message: "User Deleted Successfully",
        success: true,
    };
    return apiResponse;
});
exports.deleteUserService = deleteUserService;
