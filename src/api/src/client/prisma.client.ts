import { PrismaClient } from '@prisma/client';
import { config } from '../configuration/config';
import bcrypt from 'bcrypt';

const { SCHEMA, USER, PORT, PASSWORD, HOST, ENGINE } = config.db;
const prisma: PrismaClient = new PrismaClient({
    datasources: {
        db: {
            url: `${ENGINE}://${USER}:${PASSWORD}@${HOST}:${PORT}/${SCHEMA}?schema=public`,
        },
    },
    log: ['info', 'warn'],
});

// Database Middlewares
/**
 * Middleware to hash the user password before saving to database
 */
prisma.$use(async function (params, next): Promise<unknown> {
    if (params.model == 'User') {
        if (
            params.action === 'create' ||
            (params.action === 'update' && params.args.data.password)
        ) {
            params.args.data.password = await bcrypt.hash(params.args.data.password, 8);
        }
        if (params.action === 'upsert') {
            params.args.create.password = await bcrypt.hash(params.args.create.password, 8);
        }
    }
    return next(params);
});

/**
 * Middleware to check if database model is empty
 */
prisma.$use(async function (params, next) {
    if (params.action === 'findMany') {
        const model = params.model?.toLowerCase();
        if (model) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const count = await (prisma as Record<string, any>)[model].count();
            if (count === 0) {
                throw new Error(`[database]: ${model} table is empty`);
            }
        }
    }
    return next(params);
});

export default prisma;
