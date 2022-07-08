const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();

const app = express();
const PORT = process.env.DB_PORT;

const mainPageRouter = require('./routes/mainPage');
const usersRouter = require('./routes/users');
const cvsRouter = require('./routes/cvs');
const accountRouter = require('./routes/account');
// const authRouter = require('./routes/auth');
// const userRouter = require('./routes/user');

const sessionConfig = {
  name: 'sID',
  store: new FileStore({}),
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainPageRouter);
app.use('/users', usersRouter);
app.use('/cvs', cvsRouter);
app.use('/account', accountRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
