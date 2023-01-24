export interface Player {
    id: number;
    username: string;
    points: number;
    about: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * ? Exclude keys from user
 * @returns Player
 * Usage:
 * const user = await client.user.findUnique({ where: { user_id: 1 } });
 * const userWithoutPassword = exclude(user, ['password', 'email']);
 */

export function exclude<User>(user: User, keys: string[]): Omit<User, keyof User> {
    for (const key of keys) {
        delete user[key as keyof User];
    }
    return user;
}
