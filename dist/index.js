"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const celebrate_1 = require("celebrate");
const DatabaseConfig_1 = require("./Database/DatabaseConfig");
const body_parser_1 = __importDefault(require("body-parser"));
const index_routes_1 = __importDefault(require("./Routers/index.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
//connect database
(0, DatabaseConfig_1.connectDatabase)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// API router
app.use("/api", index_routes_1.default);
//Using celebrate errors
app.use((0, celebrate_1.errors)());
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map