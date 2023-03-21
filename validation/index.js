const education = require('./education')
const experience = require('./experience')
const isEmpty = require('./is-empty').default
const login = require('./login')
const post = require('./post')
const profile = require('./profile')
const register = require('./register')
const forms = require('./forms')

module.exports = {
  isEmpty,
  login,
  register,
  profile,
  experience,
  education,
  post,
  forms
}
