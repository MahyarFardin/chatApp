const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync')
const AppError =  require('../utils/appError')
const { promisify } = require('util')



const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

const createSendToken = (user,statusCode , req, res)=>{
    const token = signToken(user._id)
    
    res.cookie('jwt' , token , {
        maxAge:new Date(Date.now() + process.env.JWT_COOKIE_IN * 24 * 3600 * 1000),
        httpOnly:true
    })
    
    user.password = undefined
    res.status(statusCode).json({
        status:'success',
        token,
        data:{user}    
    })
}


exports.signup = catchAsync(async (req,res,next)=>{

    const newUser = await User.create({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password
    })

    createSendToken(newUser, 201, req, res);
})


exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new AppError('Please provide email and password!', 400));
    }
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401));
    }

    createSendToken(user , 200,req,res)
});


exports.logout = (req,res)=>{
    res.cookie('jwt' , 'loggedout' , {
        expies:new Date(Date.now() + 10 * 1000),
        httpOnly:true
    })

    res.status(200).json({ status: 'success' });
}



exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(
        new AppError('The user belonging to this token does no longer exist.',401));
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(
        new AppError('User recently changed password! Please log in again.', 401));
    }

    req.user = currentUser;
    next();
});