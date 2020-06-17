import { CategoryModel } from '../models/CategoryModel';

export class CategoryService {

  static async CheckNameExist(body: any) {
    if (body.name) {
      return await CategoryModel.CheckNameExist(body.name);
    }

    return {
      success: false,
      error: 'No name provided.',
      data: null,
    };
  }


  static async CreateCategory(category: any) {
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
