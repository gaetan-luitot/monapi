async function getAllCategories() {
    return fetch('http://localhost:4000/category', {
        method: 'get',
        headers: { 'content-type': 'application/json' },
    });
}

export default getAllCategories;
