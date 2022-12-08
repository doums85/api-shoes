/* eslint-disable import/no-anonymous-default-export */
import AppError from '../utils/appError';


export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = { ...err }

    error.message = err.message

    // Wrong Mongoose Object ID Error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new AppError(message, 400);
    }

    // Handling mongoose Validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new AppError(message, 400);
    }


    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })


}