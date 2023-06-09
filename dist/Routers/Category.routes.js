"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const middleware_1 = require("../base/middleware");
const category_repository_1 = require("../Category/category.repository");
const category_service_1 = require("../Category/category.service");
const category_controller_1 = require("../Category/category.controller");
const category_model_1 = require("../Category/category.model");
const categoryRouter = express_1.default.Router();
const repo = new category_repository_1.CategoryRespository();
const service = new category_service_1.CategoryService(repo);
const controller = new category_controller_1.CategoryController(service);
categoryRouter.get("/all", (0, middleware_1.wrap)(controller.getAllCategories));
categoryRouter.get("/", (0, celebrate_1.celebrate)(category_model_1.CategorySchema.all), (0, middleware_1.wrap)(controller.getCategories));
categoryRouter.get("/byId", (0, celebrate_1.celebrate)(category_model_1.CategorySchema.byId), (0, middleware_1.wrap)(controller.getCategoryById));
categoryRouter.post("/", (0, celebrate_1.celebrate)(category_model_1.CategorySchema.add), (0, middleware_1.wrap)(controller.createCategory));
categoryRouter.put("/", (0, celebrate_1.celebrate)(category_model_1.CategorySchema.update), (0, middleware_1.wrap)(controller.updateCategory));
categoryRouter.delete("/", (0, celebrate_1.celebrate)(category_model_1.CategorySchema.byId), (0, middleware_1.wrap)(controller.deleteCategory));
exports.default = categoryRouter;
//# sourceMappingURL=Category.routes.js.map