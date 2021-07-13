'use strict';
const UsersController = require('./controllers/users.controller');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/users', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.list
    ]);
    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.getById
    ]);
	app.get('/users/an/:userAccNum', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.getByAcNum
    ]);
	app.get('/users/in/:userIdNum', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.getByIdNum
    ]);
    app.patch('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        UsersController.removeById
    ]);
};