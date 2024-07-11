const express = require('express');
const createErrors = require('http-errors');
const timeout = require('connect-timeout');
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/index');
const profileRouter = require('./routes/profile');
const PORT = process.env.PORT || 3000;

// cors配置，允许所有源
app.use(cors());
// 中间件设置
app.use(express.json());
app.use(timeout('5s'));

app.use('/', indexRouter);
app.use('/profile', profileRouter);

app.use(function (req, res, next) {
  if (!req.timedout) next();
});

app.use(function (req, res, next) {
  next(createErrors(404));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
