const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');

module.exports.init = configs => {
	const app = express();
	const publicDirPath = path.join(__dirname, '../public');

	// configure express middleware
	app.use(helmet());
	app.use(compression());
	app.use(morgan(configs.logger.format));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static(publicDirPath));

	// setup routes
	app.use(routes);

	// error-handling middleware
	app.use(function(err, req, res, next) {
		console.log(err);
		res.status(500).send(err);
	});

	return app;
};
