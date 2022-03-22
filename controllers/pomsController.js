
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

// GET /poms/:task

router.get('/:id', async (req, res) => {
    try {
        const pom = await Pom.find({id: req.params.id});
        if (pom) {
            res.json(pom)
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err)
    }
})


// POST /poms

router.post('/', async (req, res, next) => {
	try {
		// 1. Use the data in the req body to create a new pom
		const newPom = await Pom.create(req.body);
		// 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
		res.status(201).json(newPom);
	} catch (err) {
		// 3. If there was an error, pass it on!
		next(err);
	}
});

// PUT /poms/:task

//DELETE /poms/:task


// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;