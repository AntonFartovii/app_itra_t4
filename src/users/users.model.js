"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var swagger_1 = require("@nestjs/swagger");
var roles_model_1 = require("../roles/roles.model");
var user_roles_model_1 = require("../roles/user-roles.model");
var posts_model_1 = require("../posts/posts.model");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: '1', description: '' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    ], User.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'mail@mail.ru', description: 'Почтовый ящик' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false })
    ], User.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'Ivan', description: 'Имя' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING })
    ], User.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: '123', description: 'Пароль' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
    ], User.prototype, "password");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'true', description: 'Забанен или нет' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false })
    ], User.prototype, "banned");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'За хулиганство', description: 'Забанен или нет' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true })
    ], User.prototype, "banReason");
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return roles_model_1.Role; }, function () { return user_roles_model_1.UserRoles; })
    ], User.prototype, "roles");
    __decorate([
        (0, sequelize_typescript_1.HasMany)(function () { return posts_model_1.Post; })
    ], User.prototype, "posts");
    User = __decorate([
        (0, sequelize_typescript_1.Table)({ tableName: 'users' })
    ], User);
    return User;
}(sequelize_typescript_1.Model));
exports.User = User;
