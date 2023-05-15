"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["ConflictError"] = 409] = "ConflictError";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["Ok"] = 200] = "Ok";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BadRequest"] = "BAD_REQUEST";
    ErrorCode["Conflict"] = "CONFLICT";
    ErrorCode["Created"] = "CREATED";
    ErrorCode["Updated"] = "UPDATED";
    ErrorCode["Forbidden"] = "FORBIDDEN";
    ErrorCode["InternalServerError"] = "INTERNAL_SERVER";
    ErrorCode["MethodNotAllowed"] = "METHOD_NOT_ALLOWED";
    ErrorCode["NotFound"] = "NOT_FOUND";
    ErrorCode["DataDuplication"] = "DATA_DUPLICATION";
    ErrorCode["Deleted"] = "DELETED";
    ErrorCode["Disabled"] = "DISABLED";
    ErrorCode["Ok"] = "SUCCESS";
    ErrorCode["ServiceUnavailable"] = "SERVICE_UNAVALABLE";
    ErrorCode["Unauthorized"] = "UNAUTHORIZED";
    ErrorCode["UserNotFound"] = "USER_NOT_FOUND";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
//# sourceMappingURL=enum.js.map