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

async function loadForYear(year) {
    return fetch(`${route}/year/${year}`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    });
}

exports.createFlow = createFlow;
exports.loadForYear = loadForYear;
