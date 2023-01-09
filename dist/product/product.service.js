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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_model_1 = require("./entity/product.model");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(data) {
        const Product = await this.productModel.create({
            title: data.title,
            category: data.category,
            quantity: data.quantity,
            company: data.company,
            cartonPrice: data.cartonPrice,
            unitPrice: data.unitPrice,
        });
        if (data.IsFixedDiscount === 'Fixed') {
            Product.discountFixed = data.fixedDiscount;
        }
        else {
            Product.discountPersentage = "17%";
        }
        await Product.save();
        return Product;
    }
    async getSingle(_id) {
        return this.productModel.findById(_id);
    }
    async getAll() {
        return this.productModel.find();
    }
    async deleteSingle(_id) {
        return this.productModel.deleteOne({ _id });
    }
    async deleteAll() {
        return this.productModel.deleteMany();
    }
    async update(_id, data) {
        const Product = await this.getSingle(_id);
        Product.title = data.title;
        Product.category = data.category;
        Product.quantity = data.quantity;
        Product.company = data.company;
        Product.cartonPrice = parseInt(data.cartonPrice);
        Product.unitPrice = data.unitPrice;
        if (data.IsFixedDiscount === 'Fixed') {
            Product.discountFixed = data.fixedDiscount;
        }
        else {
            Product.discountPersentage = "17%";
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map