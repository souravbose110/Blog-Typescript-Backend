"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("API is running");
});
app.use("/api/user", routes_1.UserHandler);
app.use("/api/category", routes_1.CategoryHandler);
app.use("/api", routes_1.CommentHandler);
app.use("/api", routes_1.PostHandler);
app.listen(PORT, () => {
    console.log(`[SERVER] : Server is running on PORT : ${PORT}`);
});
