const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const UsersController = require('../controllers/users');

router.route('/signup')
	.post(UsersController.signUp);

router.route('/signin')
	.post(UsersController.signIn);

router.route('/secret')
	.get(passport.authenticate('jwt',{ session:false }), UsersController.secret);

module.exports = router;