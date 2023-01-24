import client from '../client/prisma.client';
import { config, IConfig } from '../configuration/config';
import { exclude, Player } from '../utils/exclude_user_data.util';
import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { ACCESS_SECRET } = config as IConfig;

export async function signupUser(body: User) {
    const user = await client.user.create({
        data: {
            ...(body || undefined),
            role: undefined,
            image: `https://robohash.org/${body.username}`
        },
    });

    return exclude(user, ['password', 'email', 'role', 'updated_at']) as Player;
}

export async function loginUser(body: User) {
    const userFound = await client.user.findFirstOrThrow({
        where: {
            email: body.email,
        },
    });

    const isMatch = bcrypt.compareSync(body.password, userFound.password);

    if (isMatch) {
        const accessToken = jwt.sign(
            { id: userFound.id.toString(), username: userFound.username },
            ACCESS_SECRET as string,
            {
                expiresIn: '15d',
            }
        );
        return {
            accessToken,
            user: {
                id: userFound.id,
                username: userFound.username,
                role: userFound.role
            },
        };
    } else {
        throw new Error('Email or password is incorrect');
    }
}
