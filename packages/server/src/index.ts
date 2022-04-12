import Koa from 'koa';
import router from './router';
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
/*
  原先当路由存在，请求方式不匹配的时候，会报404，
  加了这个中间件，会报请求方式不被允许
*/
app.use(router.allowedMethods());

app.listen(8000);
