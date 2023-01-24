import { Request, Response, NextFunction } from 'express';
import prisma from '../client/prisma.client';
import { Role, User } from '@prisma/client';
import CustomRequest from '../utils/custom_request.util';

export default async function checkAdmin(req: Request, res: Response, next: NextFunction) {
    //? Get the user ID from previous midleware
    const id = (req as unknown as CustomRequest).token.id;
    let userFound: User;

    //? Search the user with the same id
    try {
        userFound = await prisma.user.findUniqueOrThrow({
            where: {
                id: Number(id),
            },
        });
    } catch (err) {
        return res.status(404).send('User not found');
    }

    //? Check if user role is equal to ADMIN
    if (userFound.role === Role.ADMIN) {
        next();
    } else {
        res.status(403).send('You are not authorized to perform this action.');
        return;
    }
}
