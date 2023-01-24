import { Request, Response, NextFunction } from 'express';

export default function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}
