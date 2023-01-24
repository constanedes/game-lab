import express, { Application } from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

// Local imports
import { config } from './configuration/config';
import prisma from './client/prisma.client';

// Routes and custom middlewares
import notFoundHandler from './middlewares/404';
import authRouter from './routes/auth.routes';
import userRouter from './routes/user.routes';
import gameRouter from './routes/game.routes';
import matchRouter from './routes/match.routes';
import commonRouter from './routes/common.routes';

export default class Server {
    private app: Application;
    private prefix: string;

    constructor() {
        this.app = express();
        this.app.set('port', config.server.PORT);
        this.app.set('host', config.server.HOST);
        this.prefix = config.server.PREFIX as string;
        this.configMiddlewares();
        this.configRoutes();
    }

    private configMiddlewares(): void {
        this.app.use(cors({
            origin: ['http://localhost:8000', 'http://localhost:3000', 'https://www.gamelab.com'],
            optionsSuccessStatus: 204
        }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    private configRoutes(): void {
        this.app.use(`${this.prefix}/static`, express.static(path.join(__dirname, '../public')));
        this.app.use('/', authRouter);
        this.app.use(`${this.prefix}/users`, userRouter);
        this.app.use(`${this.prefix}/games`, gameRouter);
        this.app.use(`${this.prefix}/matches`, matchRouter);
        this.app.use(this.prefix, commonRouter);
        this.app.use(notFoundHandler);
    }

    public async connectDatabase(): Promise<void> {
        try {
            await prisma.$connect();
            console.info('[database]: Connection established successfully');
        } catch (err) {
            console.error(`[database]: ${err}`);
        } finally {
            prisma.$on('beforeExit', async () => {
                console.info('[database]: Closing connection...');
                await prisma.$disconnect();
            });
        }
    }

    public listen(): void {
        this.app.listen(this.app.get('port'), this.app.get('host'), () => {
            console.info(
                `[server]: Running at http://${this.app.get('host')}:${this.app.get('port')}`
            );
        });
    }
}
