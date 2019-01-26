import 'joi';
import * as Hapi from 'hapi';

const server= new Hapi.Server({
    host:'localhost',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, responseToolkit) => {
        return 'hello world';
    }
});

const startServer = async () => {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

startServer();