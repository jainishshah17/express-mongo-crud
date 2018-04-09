/**
 * URL connection format
 * mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
 * 
 * In below connection URL format
 * localhost:27017 = server:port, default port is 27017, port value is optional
 * test = our database name
 * 
 * See more: https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
 */
var dbUrl;
process.env.DATABASE_URL ? dbUrl=process.env.DATABASE_URL : dbUrl='mongodb://localhost:27017/test';
var config = {
	database: {
		url: dbUrl
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
};

module.exports = config;
