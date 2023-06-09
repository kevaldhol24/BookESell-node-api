"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const middleware_1 = require("../base/middleware");
const cart_repository_1 = require("../Cart/cart.repository");
const cart_service_1 = require("../Cart/cart.service");
const cart_controller_1 = require("../Cart/cart.controller");
const cart_model_1 = require("../Cart/cart.model");
const cartRouter = express_1.default.Router();
const repo = new cart_repository_1.CartRepository();
const service = new cart_service_1.CartService(repo);
const controller = new cart_controller_1.CartController(service);
cartRouter.get("/", (0, celebrate_1.celebrate)(cart_model_1.CartSchema.get), (0, middleware_1.wrap)(controller.getCart));
cartRouter.post("/", (0, celebrate_1.celebrate)(cart_model_1.CartSchema.add), (0, middleware_1.wrap)(controller.addcart));
cartRouter.put("/", (0, celebrate_1.celebrate)(cart_model_1.CartSchema.update), (0, middleware_1.wrap)(controller.updateCart));
cartRouter.delete("/", (0, celebrate_1.celebrate)(cart_model_1.CartSchema.byId), (0, middleware_1.wrap)(controller.deleteCart));
exports.default = cartRouter;
//# sourceMappingURL=Cart.routes.js.map