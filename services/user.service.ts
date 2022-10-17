import { pool } from "../config/DBConfig";
import { User } from "../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUserService = async (user: User) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const query = `
        INSERT INTO user (name, email, password, about) 
        VALUES (
            "${user.name}",
            "${user.email}",
            "${user.password}",
            "${user.about}"
        )
    `;

    await pool.query(query);

    const response = await getUserByEmailService(user.email);

    delete response[0].password;

    return response[0];
};

export const getAllUsersService = async () => {
    const query = `
        SELECT * FROM user;
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getUserByIdService = async (id: number) => {
    const query = `
        SELECT * FROM user WHERE id = "${id}"
    `;

    const response = await pool.query(query);

    return response[0];
};

export const updateUserService = async (id: number, user: User) => {
    const query = `
        UPDATE user
        SET name = "${user.name}", email = "${user.email}", password = "${user.password}"
        WHERE id = "${id}"
    `;

    const updatedUser = await pool.query(query);

    return updatedUser;
};

export const deleteUserService = async (id: number) => {
    const query = `
        DELETE FROM user WHERE id = "${id}"
    `;

    await pool.query(query);

    const apiResponse = {
        message: "User Deleted Successfully",
        success: true,
    };

    return apiResponse;
};

export const getUserByEmailService = async (email: string) => {
    const query = `
        SELECT * FROM user WHERE LOWER(email) = LOWER("${email}")
    `;

    const response: any = await pool.query(query);

    return response[0];
};
