const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const controllers = require('../controllers')
require('dotenv').config()

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      controllers.user
        .getById(jwtPayload.id, false)
        .then((user) => {
          if (!user) return done(null, false)
          return done(null, user)
        })
        .catch((err) => {
          console.log('passport authentication Error: ' + err)
        })
    })
  )
}
