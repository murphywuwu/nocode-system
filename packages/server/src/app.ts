import Koa from 'koa';
import compose from 'koa-compose';

import middlewares from './middlewares';

const app = new Koa();

app.use(compose(middlewares));

export default app;
