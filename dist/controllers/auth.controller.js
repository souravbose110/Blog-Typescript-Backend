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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const services_1 = require("../services");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = req.body;
    const response = yield (0, services_1.getUserByEmailService)(auth.email);
    if (response.length) {
        if (yield bcryptjs_1.default.compare(auth.password, response[0].password)) {
            response[0].id = jsonwebtoken_1.default.sign(response[0]["id"], "super-string-secret");
            res.send(response);
        }
        else {
            res.status(400).send("Wrong password");
        }
    }
    else {
        res.status(400).send("Email does not exist please register");
    }
});
exports.createToken = createToken;
