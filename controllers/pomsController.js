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
			res.json(poms);
		});
	} catch (err) {
		console.log(err);
	}
});

// GET /poms/:task

router.get('/:id', async (req, res) => {
	try {
		const pom = await Pom.find({ name: req.params.id });
		if (pom) {
			res.json(pom);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		console.log(err);
	}
});

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

router.put('/:id', async (req, res) => {
	try {
		const updatedPom = req.body;
		const updatePom = await Pom.findOneAndUpdate(
			{ name: req.params.id },
			updatedPom,
			{ new: true }
		);
		res.json(updatePom);
	} catch (err) {
		console.log(err);
	}
});

//DELETE /poms/:task
router.delete('/:id', async (req, res) => {
	try {
		const pomToDelete = req.body;
		const deletePom = await Pom.deleteOne({ name: req.params.id });
		if (deletePom) {
			res.sendStatus(204);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		console.log(err);
	}
});
// router.delete('/:id', (req, res) => {
// 	Pom.deleteOne({ name: req.params.id }).then((delPom) => {
// 		res.json(delPom);
// 	});
// });


// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
