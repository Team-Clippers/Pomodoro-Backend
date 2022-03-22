
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

// PUT /poms/:task

//DELETE /poms/:task


// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;