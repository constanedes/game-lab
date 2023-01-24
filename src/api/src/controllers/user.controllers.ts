import { Request, Response } from 'express';
import getErrorMsg from '../utils/error_message.util';
import * as userService from '../services/user.services';

export async function getOneById(req: Request, res: Response): Promise<void> {
    try {
        const user = await userService.getUserById(Number(req.params.id));
        res.status(200).json(user);
    } catch (err) {
        res.status(404).send(getErrorMsg(err));
    }
}

export async function getHistoryById(req: Request, res: Response): Promise<void> {
    try {
        const user = await userService.getUserHistoryById(Number(req.params.id));
        res.status(200).json(user);
    } catch (err) {
        res.status(404).send(getErrorMsg(err));
    }
}

export async function getOneByName(req: Request, res: Response): Promise<void> {
    try {
        const user = await userService.getUserByUsername(req.params.username);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).send(getErrorMsg(err));
    }
}

export async function updateOne(req: Request, res: Response): Promise<void> {
    try {
        const userToUpdate = await userService.getUserById(Number(req.params.id));
        if (userToUpdate) {
            const user = await userService.updateUser(Number(req.params.id), req.body);
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}

export async function deleteOne(req: Request, res: Response): Promise<void> {
    try {
        const userToDelete = await userService.getUserById(Number(req.params.id));
        if (userToDelete) {
            await userService.deleteUser(Number(req.params.id));
            res.status(204).send();
        }
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}

export async function getAllByRanking(req: Request, res: Response): Promise<void> {
    try {
        const users = await userService.getUsersByRanking();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}

export async function getRecountById(req: Request, res: Response): Promise<void> {
    try {
        const user = await userService.getUserRecountById(Number(req.params.id));
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}

export async function listAll(req: Request, res: Response): Promise<void> {
    try {
        const users = await userService.listAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send(getErrorMsg(err));
    }
}
