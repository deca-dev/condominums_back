//? Routes for authorization and autentication
//* Login
//* Register
//* Recovery Password
//* Verify Account

<<<<<<< HEAD
const router = require('express').Router();
const authServices = require('./auth.services');
const { registerUser, adminRegisterUser } = require('../users/users.services');
const passport = require('passport');
const adminValidate = require('../../middlewares/rol.middleware');
require('../../middlewares/auth.middleware')(passport);

router.post('/register', registerUser);
router.post('/login', authServices.login);
router.post(
  '/register/admin',
  passport.authenticate('jwt', { session: false }),
  adminValidate,
  adminRegisterUser
);

module.exports = router;
=======
const router = require('express').Router()
const authServices = require('./auth.services')
const {registerUser} = require('../users/users.services');

router.post('/register', registerUser)
router.post('/login', authServices.login)

module.exports = router
>>>>>>> origin/main
