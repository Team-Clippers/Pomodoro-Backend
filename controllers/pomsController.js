
// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the model
const Pom = require('../models/Pom');

// Add routes to the router object
// Index: 
router.get('/', async (req, res) => {
	
	try {
		await Pom.find().then((poms) => {
			res.json(poms)
		})
	}
	catch (err) {
		console.log(err)
	}
});


// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;