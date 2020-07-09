const address = 'http://localhost:4000';
const module = 'flow';
const route = `${address}/${module}`;

async function createFlow(_what, _account, _operator, _to, _category, _amount, _mean, _date) {
    return fetch(`${route}`, {
        method: 'POST',
        body: JSON.stringify({
            what: _what,
            account: _account,
            operator: _operator,
            to: _to,
            category: _category,
            amount: _amount,
            mean: _mean,
            date: _date,
        }),
        headers: { 'content-type': 'application/json' },
    });
}

async function loadAccountForYear(accountId, year) {
    return fetch(`${route}/${accountId}/${year}`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    });
}

async function loadCategoriesForYear(accountId, year) {
    return fetch(`${route}/cat/${accountId}/${year}`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    });
}

async function getYears(accountId) {
    return fetch(`${route}/${accountId}/years`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    });
}

exports.createFlow = createFlow;
exports.loadAccountForYear = loadAccountForYear;
exports.getYears = getYears;
exports.loadCategoriesForYear = loadCategoriesForYear;
