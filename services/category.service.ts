import { pool } from "../config/DBConfig";
import { Category } from "../types";

export const createCategoryService = async (category: Category) => {
    const query = `
        INSERT INTO categories (title, description) 
        VALUES (
            "${category.title}",
            "${category.description}"
        )
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getAllCategoriesService = async () => {
    const query = `
        SELECT * FROM categories
    `;

    const response = await pool.query(query);

    return response[0];
};

export const getCategoryByIdService = async (id: number) => {
    const query = `
        SELECT * FROM categories WHERE category_id = "${id}"
    `;

    const response = await pool.query(query);

    return response[0];
};

export const updateCategoryService = async (id: number, category: Category) => {
    const query = `
        UPDATE categories
        SET title = "${category.title}", description = "${category.description}"
        WHERE category_id = ${id}
    `;

    const response = await pool.query(query);

    return response[0];
};

export const deleteCategoryService = async (id: number) => {
    const query = `
        DELETE FROM categories WHERE category_id = "${id}"
    `;

    await pool.query(query);

    const response = {
        message: "category deleted successfully",
        success: true,
    };

    return response;
};
