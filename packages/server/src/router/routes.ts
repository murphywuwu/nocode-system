import { test } from '../controller';

const routes = [
  {
    method: 'get',
    path: '/hello',
    controller: test,
  },
  {
    method: 'post',
    path: '/a',
    controller: async (ctx) => {
      console.log('ctx.request.body', ctx.request.body);
      ctx.body = ctx.request.body;
    },
  },
];

export default routes;
