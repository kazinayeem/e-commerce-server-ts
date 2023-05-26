import { error } from "../error/customerror";
import categoryModel from "../models/categoryModel";

export const saveCategoryService = (category: string) => {
//   const cat: any = categoryModel.find({ categoryName: category });
  
//   if (cat) throw error("this category alreday exist", 403);
    const c = new categoryModel({ categoryName: category });
    return c.save();
  
};

export const findCategoryService = () => {
  return categoryModel.find();
};
