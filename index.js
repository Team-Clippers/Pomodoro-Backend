//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 3000);

//=============================================================================
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//=============================================================================
// ROUTES
//=============================================================================
// Redirect
app.get('/', (req, res) => {
	res.redirect('/poms');
});
/* START CONTROLLERS HERE */
const pomsController = require('./controllers/pomsController');
app.use('/poms/', pomsController);
/* END CONTROLLERS HERE */

//=============================================================================
// START SERVER
//=============================================================================
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
