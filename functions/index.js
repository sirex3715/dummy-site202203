const functions = require("firebase-functions");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var login = require('./routes/login')
var register = require('./routes/register');
var mypage = require('./routes/mypage');
var contact = require('./routes/contact');
var admin_page = require('./routes/admin');
var another_register = require('./routes/another-register');

/*
const firebaseConfig = {
  apiKey: "AIzaSyAqj4z-oQh7KjOdZiQ-pjB-JCKdaTuBfNw",
  authDomain: "dummy-site01.firebaseapp.com",
  projectId: "dummy-site01",
  storageBucket: "dummy-site01.appspot.com",
  messagingSenderId: "219319330451",
  appId: "1:219319330451:web:1738fcaac97e1b218d0f66"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


var serviceAccount = require("./dummy-site01-firebase-adminsdk-19m3k-e13163bf84.json");

initializeApp({
  credential: cert(serviceAccount)
});


const db = getFirestore();
*/

var app = express();

/*
const sess = {
  secret: 'secretsecretsecret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true
}

app.use(session(sess))

app.use(bodyParser.urlencoded({ extended: true }));
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', login);
app.use('/register', register);

/*
app.use((req, res, next) => {
  if (req.session.username) {
    next();
  } else {
    res.redirect('/login');
  }
});
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mypage', mypage);
app.use('/contact', contact);
app.use('/admin', admin_page);
app.use('/another-register', another_register);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
exports.app = functions.https.onRequest(app);