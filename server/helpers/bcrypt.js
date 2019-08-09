const bcrypt = require('bcryptjs');

function hash(password) {
  const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT));
  const hash = bcrypt.hashSync(password, salt);
  return hash
}

module.exports = hash