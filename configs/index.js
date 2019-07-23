const configs = require(`./config.${process.env.NODE_ENV || 'dev'}`);

module.exports.getServerConfig = () => {
	return configs.server;
};
