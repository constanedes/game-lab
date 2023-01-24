import { exclude, Player } from '../utils/exclude_user_data.util';
import client from '../client/prisma.client';
import { User } from '@prisma/client';

export async function getUserById(id: number): Promise<Player> {
    // Return a type Player, which is a subset of User
    const user = await client.user.findFirstOrThrow({
        where: {
            id,
        },
    });
    return exclude(user, ['password', 'email', 'role']) as Player;
}

export async function getUserRecountById(id: number): Promise<Player> {
    const userRecount = client.user.findFirstOrThrow({
        where: {
            id,
        },
        select: {
            _count: true,
            username: true,
            points: true,
            image: true,
            about: true,
            createdAt: true,
            updatedAt: true,
            password: false,
            email: false,
            role: false,
            matches: {
                select: {
                    game: {
                        select: {
                            name: true,
                            _count: true,
                        },
                    },
                },
            },
        },
    });
    return exclude(userRecount, ['password', 'email', 'role']) as Player;
}

export async function getUserHistoryById(id: number): Promise<Player> {
    const userHistory = await client.user.findFirstOrThrow({
        where: {
            id,
        },
        select: {
            matches: {
                take: 25,
                orderBy: {
                    createdAt: 'desc',
                },
                select: {
                    id: false,
                    gameId: true,
                    userId: true,
                    winner: true,
                    createdAt: true,
                    finishedAt: true,
                },
            },
        },
    });
    return exclude(userHistory, ['password', 'email', 'role']) as Player;
}

export async function getUsersByRanking(): Promise<Player[]> {
    const users = await client.user.findMany({
        orderBy: {
            points: 'desc',
        },
        include: {
            matches: {
                take: 3,
            },
        },
        take: 25,
    });
    return users.map(user => exclude(user, ['password', 'email', 'role']) as Player);
}

export async function getUserByUsername(username: string): Promise<Player> {
    const user = await client.user.findFirstOrThrow({
        where: {
            username,
        },
    });
    return exclude(user, ['password', 'email', 'role']) as Player;
}

export async function updateUser(id: number, body: User): Promise<User> {
    return await client.user.update({
        where: {
            id,
        },
        data: body || undefined,
    });
}

export async function deleteUser(id: number): Promise<void> {
    await client.user.delete({
        where: {
            id,
        },
    });
}

export async function listAllUsers(): Promise<Player[]> {
    return (
        await client.user.findMany({
            take: 150,
        })
    ).map(user => {
        return exclude(user, ['password', 'email', 'role']) as Player;
    });
}
