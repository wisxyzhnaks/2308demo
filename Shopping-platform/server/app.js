var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors')

let expressJWT = require('express-jwt');
let {key,outtime} = require('./config/store.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/houtai/login.js');
var goodRouter = require('./routes/houtai/good.js');
var userRouter = require('./routes/houtai/user.js');
var shopRouter = require('./routes/houtai/shop.js');
var orderRouter = require('./routes/houtai/order.js');
var dengluRouter  = require('./routes/app/login.js')

var app = express();

app.use(cors({origin:'*'}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressJWT.expressjwt({
	secret:key,
	algorithms:['HS256']
}).unless({
	path:['/login','/denglu']
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/good', goodRouter);
app.use('/user', userRouter);
app.use('/shop', shopRouter);
app.use('/order', orderRouter);
app.use('/denglu',dengluRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  if(err.name==='UnauthorizedError'){
  	res.send({state:-1,msg:'token验证失败'})
  }else{
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};
	  
	  // render the error page
	  res.status(err.status || 500);
	  res.render('error');
  }
});

module.exports = app;
