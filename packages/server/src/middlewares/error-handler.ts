export default function errorHandler() {
  return async function (ctx, next) {
    await next();

    ctx.body = {
      statusCode: ctx.status,
      code: (ctx.body && ctx.body.code) || null,
      msg: (ctx.body && ctx.body.msg) || ctx.response.message,
    };
  };
}
