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
exports.Role = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var swagger_1 = require("@nestjs/swagger");
var users_model_1 = require("../users/users.model");
var user_roles_model_1 = require("./user-roles.model");
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: '1', description: '' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    ], Role.prototype, "id");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'Admin', description: '' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: false })
    ], Role.prototype, "value");
    __decorate([
        (0, swagger_1.ApiProperty)({ example: 'Может то и се', description: '' }),
        (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
    ], Role.prototype, "description");
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return users_model_1.User; }, function () { return user_roles_model_1.UserRoles; })
    ], Role.prototype, "users");
    Role = __decorate([
        (0, sequelize_typescript_1.Table)({ tableName: 'roles' })
    ], Role);
    return Role;
}(sequelize_typescript_1.Model));
exports.Role = Role;
