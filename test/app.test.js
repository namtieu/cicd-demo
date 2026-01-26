const request = require('supertest');
const app = require('../src/index');

test("GET / should return message", async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('CI/CD on Windows is working 🚀');
});
