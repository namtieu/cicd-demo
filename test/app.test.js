const request = require('supertest');
const app = require('../src/app');

describe("App tests", () => {
  test("GET / should return message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("CI/CD working!");
  });

test("GET / should return message", async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
});
});