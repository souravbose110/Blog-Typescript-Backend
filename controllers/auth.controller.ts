import e, { Request, Response } from "express";
import { getUserByEmailService } from "../services";
import { Auth } from "../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createToken = async (req: Request, res: Response) => {
    const auth: Auth = req.body;

    const response = await getUserByEmailService(auth.email);
    if (response.length) {
        if (await bcrypt.compare(auth.password, response[0].password)) {
            response[0].id = jwt.sign(response[0]["id"], "super-string-secret");
            res.send(response);
        } else {
            res.status(400).send("Wrong password");
        }
    } else {
        res.status(400).send("Email does not exist please register");
    }
};
