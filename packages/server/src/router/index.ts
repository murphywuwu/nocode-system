import koaRouter from 'koa-router';
const router = new koaRouter();

import routerList from './routes';

routerList.forEach((item) => {
  const { method, path, controller } = item;
  router[method](path, controller);
});

export default router;
