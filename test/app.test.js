const request = require('supertest');
const express = require('express');

Test("GET / should return message", async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('CI/CD on Windows broken 🚀');
});
