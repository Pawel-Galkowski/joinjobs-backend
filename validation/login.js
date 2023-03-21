﻿const Validator = require('validator')
const isEmpty = require('./is-empty').default

module.exports = function validateLoginImput (data) {
  const errors = {}

  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''

  if (!Validator.isEmpty(data.email)) {
    errors.email = 'Email is invalid'
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }
  if (!Validator.isEmpty(data.password)) {
    errors.password = 'Password is invalid'
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required '
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
