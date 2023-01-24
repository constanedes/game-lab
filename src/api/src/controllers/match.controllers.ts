import { Request, Response } from 'express';
import getErrorMsg from '../utils/error_message.util';
import * as matchService from '../services/match.services';

export async function listAll(req: Request, res: Response): Promise<void> {
    try {
        const matches = await matchService.listAllMatches();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function getTheLastOne(req: Request, res: Response): Promise<void> {
    try {
        const match = await matchService.getLatestMatch();
        res.status(200).json(match);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function createOne(req: Request, res: Response): Promise<void> {
    try {
        const match = await matchService.createMatch(req.body);
        res.status(200).json(match);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function getOneById(req: Request, res: Response): Promise<void> {
    try {
        const match = await matchService.getMatchToInspect(req.params.id);
        res.status(200).json(match);
    } catch (error) {
        res.status(404).send(getErrorMsg(error));
    }
}

export async function deleteAll(req: Request, res: Response): Promise<void> {
    try {
        await matchService.deleteAllMatches();
        res.status(204).send();
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}
