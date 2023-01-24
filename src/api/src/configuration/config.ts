import * as dotenv from 'dotenv';
dotenv.config();

export interface IConfig {
    server: {
        PORT?: string;
        HOST?: string;
        PREFIX?: string;
    };
    db: {
        SCHEMA?: string;
        USER?: string;
        PORT?: string;
        PASSWORD?: string;
        HOST?: string;
        ENGINE?: string;
    };
    ACCESS_SECRET?: string;
    REFRESH_SECRET?: string;
}

export const config: IConfig = {
    server: {
        PORT: process.env.SV_PORT || '8000',
        HOST: process.env.SV_HOST || '127.0.0.1',
        PREFIX: process.env.SV_PREFIX || '/api/v1',
    },
    db: {
        ENGINE: process.env.DB_ENGINE,
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PORT: process.env.DB_PORT,
        PASSWORD: process.env.DB_PASSWORD,
        SCHEMA: process.env.DB_SCHEMA,
    },
    ACCESS_SECRET: process.env.ACCESS_TOKEN_SECRET,
} as const;
