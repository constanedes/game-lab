import { Game } from '@prisma/client';
import client from '../client/prisma.client';

export async function listAllGames(): Promise<Game[]> {
    return await client.game.findMany({
        take: 200,
    });
}

export async function getRandomGame(): Promise<Game> {
    const games = await listAllGames();
    const randomIndex = Math.floor(Math.random() * games.length);
    return games[randomIndex];
}

export async function updateGame(id: number, body: Game): Promise<Game> {
    return await client.game.update({
        where: {
            id,
        },
        data: body || undefined,
    });
}

export async function createGame(body: Game): Promise<Game> {
    return await client.game.create({
        data: {
            name: body.name,
            description: body.description,
            image: body.image,
        },
    });
}

export async function deleteGame(id: number): Promise<void> {
    await client.game.delete({
        where: {
            id,
        },
    });
}

export async function getPopularGames() {
    return await client.game.findMany({
        select: {
            id: true,
            name: true,
            _count: {
                select: {
                    matches: true,
                },
            },
        },
        orderBy: {
            matches: {
                _count: 'desc',
            },
        },
        take: 10,
    });
}

export async function getGameById(id: number): Promise<Game | null> {
    return await client.game.findUniqueOrThrow({
        where: {
            id,
        },
    });
}
