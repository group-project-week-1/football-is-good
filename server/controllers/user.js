const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_ACCESS_CLIENT_ID);
const User = require('../models/user');
const generateToken = require('../helpers/generateToken');  

class UserController {

  static signin(req, res, next) {

    let isUser = null

    client.verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.GOOGLE_ACCESS_CLIENT_ID
      })
      .then(user => {
        isUser = user
        return User.findOne({
          email: user.payload.email
        })
      })
      .then(found => {
        if (!found) {
          User.create({
            fullName: isUser.payload.name,
            email: isUser.payload.email,
            password: process.env.NEW_USER_PASSWORD,
            picture: isUser.payload.picture
          })
        } else {
          // console.log(found);
          const user = {
            fullName: found.fullName,
            email: found.email,
            password: found.password,
            picture: found.picture
          }
          return user
        }
      })
      .then(newUser => {
        const token = generateToken(newUser)
        res.status(201).json({
          token,
          name: newUser.fullName,
          picture: newUser.picture
        })
      })
      .catch(next)
  }

}

module.exports = UserController