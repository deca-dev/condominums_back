const { getUserByEmail } = require('../users/users.controllers');
const { comparePassword } = require('../../utils/crypto');

const loginUser = async (email, password) => {
  try {
    const user = await getUserByEmail(email);
    const verifyPassword = comparePassword(password, user.dataValues.password);
    if (verifyPassword) {
      return user;
    }
    return false;
  } catch (error) {
    return error;
  }
};

module.exports = {
  loginUser
};
