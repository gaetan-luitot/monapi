const address = 'http://localhost:4000';
const module = 'category';
const route = `${address}/${module}`;

async function getAllCategoriesName() {
    return fetch(`${route}/name`, {
        method: 'get',
        headers: { 'content-type': 'application/json' },
    });
}

async function createCategory(categoryName) {
    return fetch(`${route}`, {
        method: 'POST',
        body: JSON.stringify({ name: categoryName }),
        headers: { 'content-type': 'application/json' },
    });
}

exports.getAllCategoriesName = getAllCategoriesName;
exports.createCategory = createCategory;
