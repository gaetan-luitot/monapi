const address = 'http://localhost:4000';
const module = 'flow';
const route = `${address}/${module}`;

async function createFlow(flowName, opIn, opOut) {
    return fetch(`${route}`, {
        method: 'POST',
        body: JSON.stringify({
            name: flowName,
            operatorIn: opIn,
            operatorOut: opOut,
        }),
        headers: { 'content-type': 'application/json' },
    });
}

exports.createFlow = createFlow;
