const express = require('express');
const app = express();
const Port = process.env.PORT || 5000;
const cors = require('cors');
const colors = require('colors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import Route
const storeRoute = require('./Route/v1/store.route');

// Add Meddilware
app.use(cors());
app.use(express.json());

// Add Database
mongoose
	.connect(process.env.DB)
	.then(() => console.log('Database connected successfully.'.red.bold))
	.catch((err) => console.log(err));

// CAll Route
app.use('/api/v1', storeRoute);

// Home Route
app.get('/', (req, res) => {
	res.send('<h1>How Are You?</h1>');
});

// Any Route Not Found
app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(Port, () => {
	console.log(`Food Delivary App Is Running: ${Port}`.yellow.bold);
});
