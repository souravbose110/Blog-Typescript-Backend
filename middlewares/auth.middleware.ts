import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const protect = (req: Request, res: Response, next: NextFunction) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, "super-string-secret");

            console.log(decoded);

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not Authorized, No Token");
        }
    } else {
        console.log("Please provide token");
    }
};
