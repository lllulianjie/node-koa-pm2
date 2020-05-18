const Koa = require('koa')
const app = new Koa()
const router = require('./api/test')

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const end = Date.now()
  console.log(`${ctx.method} ${ctx.url} - ${start - end}ms`)
})

app.use(router.routes())

app.listen(3000)