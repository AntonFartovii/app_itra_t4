"use strict";
exports.__esModule = true;
exports.varMiddleware = void 0;
function varMiddleware(req, res, next) {
    res.locals.isAuth = req.session.isAuthenticated;
    next();
}
exports.varMiddleware = varMiddleware;
