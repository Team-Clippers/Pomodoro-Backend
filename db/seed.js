// pom
const Pom = require('../models/Pom');
const pomData = require('./pom.json');
Pom.deleteMany({})
	.then(() => Pom.insertMany(pomData))
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});

	// user
