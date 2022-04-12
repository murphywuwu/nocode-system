import supertest from 'supertest';

import app from '../app';

describe('error handle', function () {
  let request;
  beforeAll(function () {
    request = supertest(app.callback());
  });

  afterAll(function () {
    request = null;
  });

  test('hello world works', async () => {
    const response = await request.get('/hello');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();

    // code
    // msg
    // data
  });
});
