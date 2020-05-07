const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/KSM', { 
 useNewUrlParser: true,
 useUnifiedTopology: true }
 );

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users',require('./routes/users'));

app.listen(port,()=>{
	console.log('Server is up and running');
})