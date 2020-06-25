async function CreateOperator(operatorName, category) {
    return fetch('http://localhost:4000/operator', {
        method: 'POST',
        body: JSON.stringify({ name: operatorName, categoryName: category }),
        headers: { 'content-type': 'application/json' },
    });
}

module.exports = {
    createOperator: CreateOperator,
};
