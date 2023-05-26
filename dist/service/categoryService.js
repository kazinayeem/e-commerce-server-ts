"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCategoryService = exports.saveCategoryService = void 0;
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const saveCategoryService = (category) => {
    //   const cat: any = categoryModel.find({ categoryName: category });
    //   if (cat) throw error("this category alreday exist", 403);
    const c = new categoryModel_1.default({ categoryName: category });
    return c.save();
};
exports.saveCategoryService = saveCategoryService;
const findCategoryService = () => {
    return categoryModel_1.default.find();
};
exports.findCategoryService = findCategoryService;
