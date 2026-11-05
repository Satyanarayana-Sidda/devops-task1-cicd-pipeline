
const test = require("node:test");
const assert = require("node:assert");

test("Application health status should be UP", async () => {
    const response = await fetch("http://localhost:3000/health");

    assert.strictEqual(response.status, 200);

    const data = await response.json();

    assert.strictEqual(data.status, "UP");
});
