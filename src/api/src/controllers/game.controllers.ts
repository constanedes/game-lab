import { Request, Response } from 'express';
import getErrorMsg from '../utils/error_message.util';
import * as gameService from '../services/game.services';

export async function listAll(req: Request, res: Response): Promise<void> {
    try {
        const games = await gameService.listAllGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function getPopularOnes(req: Request, res: Response): Promise<void> {
    try {
        const games = await gameService.getPopularGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function getRandomOne(req: Request, res: Response): Promise<void> {
    try {
        const game = await gameService.getRandomGame();
        res.status(200).json(game);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function createOne(req: Request, res: Response): Promise<void> {
    try {
        const game = await gameService.createGame(req.body);
        res.status(201).json(game);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function updateOne(req: Request, res: Response): Promise<void> {
    try {
        const game = await gameService.updateGame(Number(req.params.id), req.body);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function deleteOne(req: Request, res: Response): Promise<void> {
    try {
        const gameToDelete = await gameService.getGameById(Number(req.params.id));
        if (gameToDelete) {
            await gameService.deleteGame(Number(req.params.id));
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).send(getErrorMsg(error));
    }
}

export async function getOneById(req: Request, res: Response): Promise<void> {
    try {
        const game = await gameService.getGameById(Number(req.params.id));
        res.status(200).json(game);
    } catch (error) {
        res.status(404).send(getErrorMsg(error));
    }
}
