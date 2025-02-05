import request from 'supertest';
import { testServer } from '../../test-server';

describe('test sobre routes.ts de TODOS', () => {
  beforeAll(async () => {
    await testServer.start();
  });

  test('should return TODOs api/todos', async () => {
    const response = await request(testServer.app)
      .get('/api/todos')
      //.expect(200);

    console.log(response.body);
  });
});
