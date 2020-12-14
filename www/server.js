const { createServer } = require('http');

const { app } = require('../src/app');

const { databaseConnection } = require('../database');

const PORT = process.env.PORT || 3000;

const server = createServer(app);

const startServer = () => {
    console.log('🟢 Successful connected to database');
    server.listen(PORT, () => console.log('🟢 Server is successful started'));
}


databaseConnection.once('open', startServer);
databaseConnection.on('error', error => {
    throw new Error(error)
})


