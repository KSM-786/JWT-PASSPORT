const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
	email : {
		type:String,
		required: true
		}, 
	password :{ 
		type:String,
		required: true
		}
});

// Create model
const User = mongoose.model('user',userSchema);

module.exports = User;