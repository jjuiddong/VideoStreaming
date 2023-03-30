require("dotenv").config()
var Koa = require('koa')
var send = require('koa-send')

const { 
  PORT
} = process.env

console.log(`Start FrontEnd WebServer`)

const app = new Koa()

app.use(async (ctx) => {
  if (ctx.status === 404 && ctx.path.indexOf('./api') !== 0) {
    if (ctx.url === '/') {
      await send(ctx, 'index.html')
    } else {
      await send(ctx, ctx.url)
    }
  }
});

const port = PORT
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
