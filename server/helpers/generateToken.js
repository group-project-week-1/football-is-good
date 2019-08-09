const jwt = require('jsonwebtoken');

function generateToken(user){
  const token = jwt.sign(user, process.env.TOKEN)
  return token
}

module.exports = generateToken