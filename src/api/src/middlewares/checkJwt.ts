import { Request, Response, NextFunction } from 'express';
import { config, IConfig } from '../configuration/config';
import jwt, { Secret } from 'jsonwebtoken';
import CustomRequest from '../utils/custom_request.util';

const { ACCESS_SECRET } = config as IConfig;

export default async function checkJwt(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'No credentials sent!' });
        }
        //? Verify the token and obtain the user id from the payload
        const decoded = jwt.verify(token, ACCESS_SECRET as Secret) as CustomRequest['token'];

        //? Store the user id and the toquen in the request
        (req as CustomRequest).token = decoded;
        next();
    } catch (err) {
        console.error(err);
        res.status(403).send('Invalid credentials');
    }
}
