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

  describe('http', function () {
    test('404', async function () {
      const result = await request.get('/error/404');

      expect(result.body.statusCode).toBe(404);
      expect(result.body.msg).toBe('Not Found');
    });
  });

  describe('business logic', function () {
    test('data does not exit', async function () {
      const result = await request.get('/error/null');

      expect(result.body.statusCode).toBe(200);
      expect(result.body.code).toBe('0000');
      expect(result.body.msg).toBe('数据不存在');
    });
  });
});
