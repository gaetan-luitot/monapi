async function CreateOperator(operatorName, categoryName) {
    return fetch('http://localhost:4000/operator', {
        method: 'POST',
        body: JSON.stringify({ name: operatorName, category: categoryName }),
        headers: { 'content-type': 'application/json' },
    });
}

module.exports = {
    createOperator: CreateOperator,
};
