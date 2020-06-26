const address = 'http://localhost:4000';
const module = 'account';
const route = `${address}/${module}`;

async function createAccount(name) {
    return fetch(`${route}`, {
        method: 'POST',
        body: JSON.stringify({ operatorName: name }),
        headers: { 'content-type': 'application/json' },
    });
}

exports.createAccount = createAccount;
