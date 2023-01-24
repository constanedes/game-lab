import Server from './server';

function main() {
    try {
        const server: Server = new Server();
        server.connectDatabase();
        server.listen();
    } catch (err) {
        console.error(`[server]: Error: ${err}`);
    }
}

main();
