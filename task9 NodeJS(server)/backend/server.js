const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body')();
const mongoose = require('mongoose');

const server = new Koa();
const router = new Router();
mongoose.connect('mongodb://localhost/');

router.get('/', ctx => {
  ctx.body = 'Hello Koa';
})

router.post('/add', bodyParser, ctx => {
  ctx.body = { data: ctx.request.body };
})



server
  .use(logger('tiny'))
  .use(router.routes())
  .listen(3001);