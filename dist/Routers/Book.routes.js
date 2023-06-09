"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const middleware_1 = require("../base/middleware");
const book_repository_1 = require("../Book/book.repository");
const book_service_1 = require("../Book/book.service");
const book_controller_1 = require("../Book/book.controller");
const book_model_1 = require("../Book/book.model");
const bookRouter = express_1.default.Router();
const repo = new book_repository_1.BookRepository();
const service = new book_service_1.BookService(repo);
const controller = new book_controller_1.BookController(service);
bookRouter.get("/all", (0, middleware_1.wrap)(controller.getAllBooks));
bookRouter.get("/", (0, celebrate_1.celebrate)(book_model_1.BookSchema.all), (0, middleware_1.wrap)(controller.getBooks));
bookRouter.get("/byId", (0, celebrate_1.celebrate)(book_model_1.BookSchema.byId), (0, middleware_1.wrap)(controller.getBookById));
bookRouter.get("/search", (0, celebrate_1.celebrate)(book_model_1.BookSchema.search), (0, middleware_1.wrap)(controller.searchBook));
bookRouter.post("/", (0, celebrate_1.celebrate)(book_model_1.BookSchema.add), (0, middleware_1.wrap)(controller.createBook));
bookRouter.put("/", (0, celebrate_1.celebrate)(book_model_1.BookSchema.update), (0, middleware_1.wrap)(controller.updateBook));
bookRouter.delete("/", (0, celebrate_1.celebrate)(book_model_1.BookSchema.byId), (0, middleware_1.wrap)(controller.deleteBook));
exports.default = bookRouter;
//# sourceMappingURL=Book.routes.js.map