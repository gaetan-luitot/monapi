async function GetAllCategories() {
    return fetch('http://localhost:4000/category', {
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
    getAllCategories: GetAllCategories,
    createCategory: CreateCategory,
};
