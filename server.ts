import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
    CategoryHandler,
    CommentHandler,
    PostHandler,
    UserHandler,
} from "./routes";

dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
});

app.use("/api/user", UserHandler);
app.use("/api/category", CategoryHandler);
app.use("/api", CommentHandler);
app.use("/api", PostHandler);

app.listen(PORT, () => {
    console.log(`[SERVER] : Server is running on PORT : ${PORT}`);
});
