const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('length');
  });
});
