async function GetAllCategoriesName() {
    return fetch('http://localhost:4000/category/names', {
        method: 'get',
        headers: { 'content-type': 'application/json' },
    });
}

async function CreateCategory(categoryName) {
    return fetch('http://localhost:4000/category', {
        method: 'POST',
        body: JSON.stringify({ name: categoryName }),
        headers: { 'content-type': 'application/json' },
    });
}

module.exports = {
    getAllCategoriesName: GetAllCategoriesName,
    createCategory: CreateCategory,
};
