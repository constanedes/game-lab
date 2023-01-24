import prisma from '../src/client/prisma.client';

async function seedUsers(): Promise<void> {
    await prisma.user.upsert({
        where: {
            email: 'admin@gmail.com',
        },
        update: {},
        create: {
            username: 'admin',
            email: 'admin@gamelab.com',
            about: "I'm the admin of gamelab :)",
            password: 'admin',
            image: 'https://robohash.org/admin',
            role: 'ADMIN',
            points: 2077,
        },
    });

    await prisma.user.create({
        data: {
            username: 'test',
            email: 'testing@gmail.com',
            password: 'password',
            role: 'USER',
            points: 99,
            image: 'https://robohash.org/test',
            about: "I 'm a test user",
        },
    });

    await prisma.user.create({
        data: {
            username: 'default_user_1',
            email: 'user1@gmail.com',
            password: 'user1password',
            image: 'https://robohash.org/user1',
            about: "I'm the default user 1",
            points: 10,
        },
    });

    console.info('[database]: Seeded users:', await prisma.user.count());
}

async function seedGames(): Promise<void> {
    const games = await prisma.game.createMany({
        data: [
            {
                name: 'Bubble',
                description: 'Play with bubbles!',
                image: '/assets/images/game1-bubble.png',
            },
            {
                name: 'Among Us',
                description: 'Guess who is the impostor...',
                image: '/assets/images/game2-amoungas.png',
            },
            {
                name: 'Tic Tac Toe',
                description: 'A classic game.',
                image: '/assets/images/game3-tictactoe.png',
            },
            {
                name: 'Matching',
                description: 'Match the cards.',
                image: '/assets/images/game4-matching.png',
            },
            {
                name: 'Mahjong',
                description: 'Another memory game.',
                image: '/assets/images/game5-majho.png',
            },
            {
                name: 'Pool',
                description: 'Open the floodgates using the mouse and in the correct order so that all the balls reach their destination correctly',
                image: '/assets/images/game7-pool.png',
            },
            {
                name: 'Chinchon',
                description: 'The Chinchón is a Spanish card game that enjoys great popularity in Spain and some South American countries.',
                image: '/assets/images/game8-chinchon.png',
            },
            {
                name: 'Pacman',
                description: 'The most famous arcade eater',
                image: '/assets/images/game9-pacman.png',
            },
            {
                name: 'PlantsvsZombies',
                description: 'Get ready to fertilize your plants while a group of zombies eager for fun is about to invade your house',
                image: '/assets/images/game10-plantasvszombies.png'
            },
        ],
    });
    console.info('[database]: Seeded games:', await prisma.game.count());
}

async function seedMatches(): Promise<void> {
    await prisma.match.createMany({
        data: [
            {
                gameId: 1,
                userId: 2,
                winner: 'Machine',
            },
            {
                gameId: 2,
                userId: 3,
                winner: 'User',
            },
            {
                gameId: 3,
                userId: 2,
                winner: 'Undecided',
                finishedAt: new Date(),
            },
        ],
    });
    console.log('[database]: Seeded matches:', await prisma.match.count())
}

async function main() {
    try {
        await Promise.all([seedUsers(), seedGames()]);
        await new Promise(r => setTimeout(r, 2000));
        seedMatches();
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    }
}
main();
