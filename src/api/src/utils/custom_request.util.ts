import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export default interface CustomRequest extends Request {
    id: string;
    token: {
        id: string;
        username: string;
        jwt: string | JwtPayload;
    };
}
