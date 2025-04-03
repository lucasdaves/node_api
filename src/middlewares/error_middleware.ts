import { Request, Response, NextFunction } from 'express';
import { ErrorModel } from '../models/error_model';

export default function errorMiddleware(
    error: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
): void {
    console.log(error)
    if (error instanceof ErrorModel) {
        res.status(error.statusCode).json({
            status: 'error',
            message: `${error.message}`
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
    return;
}
