const CategoryModel = require('../models/CategoryModel');

class CategoryService {

  static async CheckNameExist(body) {
    if (body.name) {
      return await CategoryModel.CheckNameExist(body.name);
    }

    return {
      success: false,
      error: 'No name provided.',
      data: null,
    };
  }


  static async CreateCategory(category) {
    if (category.name) {
      return await CategoryModel.CreateCategory(category);
    }

    return {
      success: false,
      error: 'No name provided.',
      data: null,
    };
  }

}

module.exports = CategoryService;
