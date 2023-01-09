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
exports.CreateProductDTO = void 0;
const class_validator_1 = require("class-validator");
class CreateProductDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be string' }),
    (0, class_validator_1.Length)(3, 255),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Category must be string' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Quantity is missing' }),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Capmany is missing' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Discount is missing' }),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "IsFixedDiscount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "fixedDiscount", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Carton price is missing' }),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "cartonPrice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'unit price is missing' }),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "unitPrice", void 0);
exports.CreateProductDTO = CreateProductDTO;
//# sourceMappingURL=create-product.dto.js.map