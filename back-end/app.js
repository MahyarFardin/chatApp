const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const app = express()
const userRouter = require('./routes/userRoutes')
const test = require('./routes/test') 


// app.enable('trust proxy');'

app.use(cors());
app.options('*', cors()); 

app.use(cookieParser());

app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());

app.use('/api/users' , userRouter) 
app.use('/api/test' , test)

module.exports = app;