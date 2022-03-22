const Pom = require('../models/Pom');
const pomData = require('./pom.json');
Show.deleteMany({})
	.then(() => Show.insertMany(showData))
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
