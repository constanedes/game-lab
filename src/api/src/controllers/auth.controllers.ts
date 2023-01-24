import { Request, Response } from 'express';
import getErrorMsg from '../utils/error_message.util';
import * as authService from '../services/auth.services';

export async function register(req: Request, res: Response): Promise<void> {
    try {
        const user = await authService.signupUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}

export async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send('All input is required');
        }

        const foundUser = await authService.loginUser(req.body);
        console.info('[server]: jwt token created.');
        res.status(201).json(foundUser);
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}
