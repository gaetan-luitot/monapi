const address = 'http://localhost:4000';
const module = 'operator';
const route = `${address}/${module}`;

async function createOperator(operatorName, category) {
    return fetch(`${route}`, {
        method: 'POST',
        body: JSON.stringify({ name: operatorName, categoryName: category }),
        headers: { 'content-type': 'application/json' },
    });
}

async function getAllOperatorName() {
    return fetch(`${route}/name`, {
        method: 'get',
        headers: { 'content-type': 'application/json' },
    });
}

exports.createOperator = createOperator;
exports.getAllOperatorName = getAllOperatorName;
