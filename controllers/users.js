const JWT = require('jsonwebtoken');
const User = require('../models/user');

signToken = user => {
	return JWT.sign({
		iss: 'KSM',
		sub: user.id,
		iat: new Date().getTime(),
		exp: new Date().setDate(new Date().getDate()+1)
	},'KSMROCKX');
}

module.exports = {
	signUp : async(req,res,next) =>{
	const { email, password } = req.body;
	
	// Check existing user
	const foundUser = await User.findOne({ email });
	if(foundUser){
		return res.status(403).json({ error: 'Email already in use' });
	}
	// Create new user
	const newUser = new User({ 
		email, 
		password 
	});
	await newUser.save();
	// Respond with token
	const token = signToken(newUser);

	res.status(200).json({ token });  

  },

  signIn : async(req,res,next) =>{
	// Generate Token
  },

  secret : async(req,res,next) =>{
	console.log('now here');
  }

}