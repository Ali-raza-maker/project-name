"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDTO = void 0;
const class_validator_1 = require("class-validator");
class UpdateProductDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be string' }),
    (0, class_validator_1.Length)(3, 255),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Category must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Category date is missing' }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Quantity must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity date is missing' }),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Quantity must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Capmany date is missing' }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Quantity must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Discount date is missing' }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "IsFixedDiscount", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Quantity must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Invalid discount is missing' }),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "fixedDiscount", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Carton Price must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Carton price is missing' }),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "cartonPrice", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Unit Price must be string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'unit price is missing' }),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "unitPrice", void 0);
exports.UpdateProductDTO = UpdateProductDTO;
//# sourceMappingURL=update-product.dto.js.map