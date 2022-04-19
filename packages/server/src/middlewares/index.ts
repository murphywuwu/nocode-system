import bodyParser from 'koa-bodyparser';
import router from '../router';
import errorHandler from './error-handler';

const mdBodyParser = bodyParser();

const mdRoute = router.routes();

/*
  原先当路由存在，请求方式不匹配的时候，会报404，
  加了这个中间件，会报请求方式不被允许
*/
const mdRouterAllowed = router.allowedMethods();

const mdErrorHandler = errorHandler();

export default [mdBodyParser, mdRoute, mdRouterAllowed, mdErrorHandler];
