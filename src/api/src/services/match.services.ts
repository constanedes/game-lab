import { Match } from '@prisma/client';
import client from '../client/prisma.client';

export async function getLatestMatch(): Promise<Match | null> {
    return await client.match.findFirst({
        include: {
            game: {
                select: {
                    name: true,
                },
            },
            user: {
                select: {
                    username: true,
                    points: true,
                },
            },
        },
        orderBy: {
            createdAt: 'asc',
        },
    });
}

export async function getMatchToInspect(id: string): Promise<Match | null> {
    return await client.match.findFirst({
        where: {
            id: id,
        },
        include: {
            game: {
                select: {
                    name: true,
                    description: true,
                },
            },
            user: {
                select: {
                    id: true,
                    username: true,
                    points: true,
                },
            },
        },
    });
}

export async function createMatch(body: Match): Promise<Match> {
    return await client.match.create({
        data: {
            ...(body || undefined),
        },
    });
}

export async function deleteAllMatches() {
    await client.match.deleteMany();
}

export async function listAllMatches(): Promise<Match[]> {
    return await client.match.findMany({
        take: 200,
    });
}
