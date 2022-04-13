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
  {
    method: 'get',
    path: '/error/null',
    controller: async (ctx, next) => {
      ctx.body = { code: '0000', msg: '数据不存在' };
      await next();
    },
  },
];

export default routes;
