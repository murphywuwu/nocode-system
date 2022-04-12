import { hello } from '../controller';

const routes = [
  {
    method: 'get',
    path: '/hello',
    controller: hello,
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
