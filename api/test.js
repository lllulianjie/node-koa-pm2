const Router = require('koa-router')
const router = new Router()

router.get('/api', async (ctx, next) => {
  ctx.body = 'hello world'
})

router.get('/api/text', async (ctx, next) => {
  ctx.body = {
    msg: 'here is test',
    query: ctx.query,
    queryStr: ctx.querystring
  }
})

router.post('/api/users', async (ctx, next) => {
  ctx.body = 'here is users'
})

// router.post('/api/users/:id', async (ctx, next) => {
//   ctx.body = 'Cindy'
// })

module.exports = router