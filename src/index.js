const configs = require('../configs');
const server = require('./server');

// Catch unhandling unexpected exceptions
process.on('uncaughtException', error => {
	console.error(`uncaughtException ${error.message}`);
});

// Catch unhandling rejected promises
process.on('unhandledRejection', reason => {
	console.error(`unhandledRejection ${reason}`);
});

const serverConfig = configs.getServerConfig();
const app = server.init(serverConfig);

app.listen(process.env.PORT || serverConfig.port, () => {
	console.log(`Server is up on ===> http://localhost:${serverConfig.port}`);
});
