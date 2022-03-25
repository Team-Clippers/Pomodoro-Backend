const mongoose = require('../db/connection');

const PomSchema = new mongoose.Schema({
	name: String,
	workLength: Number,
	shortBreak: Number,
	sessionsBreak: Number,
	longBreak: Number,
});

const Pom = mongoose.model('Pom', PomSchema);

module.exports = Pom;
