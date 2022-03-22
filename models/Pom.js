// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a new schema with 2 properties, and assign it to a variable
const PomSchema = new mongoose.Schema({
	task: String,
	workDuration: Number,
	shortBreakDuration: Number,
	numOfPomsTillBreak: Number,
	longBreakDuration: Number,
});

// instantiate the model, calling it "Pom" and with the schema we just made
const Pom = mongoose.model('Pom', PomSchema);
console.log(Pom)
// export the newly created model
module.exports = Pom;
