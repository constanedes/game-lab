import { Request, Response } from 'express';

export function apiHome(req: Request, res: Response): void {
    res.status(200).json({
        message: 'Gamelab API Test',
    });
}

export function health(req: Request, res: Response): void {
    res.status(200).sendFile('health.txt', { root: 'public' });
}

export function creators(req: Request, res: Response): void {
    const creators = [
        {
            id: 1,
            name: 'Constantino Edes',
            github_profile: 'https://api.github.com/user/78028296',
        },
        {
            id: 2,
            name: 'Virginia Carrizo',
            github_profile: 'https://api.github.com/user/91098089',
        },
        {
            id: 3,
            name: 'Franco Bianciotto',
            github_profile: 'https://api.github.com/user/82484713',
        },
        {
            id: 4,
            name: 'Manuel Dorado',
            github_profile: 'https://api.github.com/user/107279690',
        },
        {
            id: 5,
            name: 'Antonella Garcia',
            github_profile: 'https://api.github.com/user/85800184',
        },
    ];
    res.status(200).json(creators.sort(() => Math.random() - 0.5));
}
