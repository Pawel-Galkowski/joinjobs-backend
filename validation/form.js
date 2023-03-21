const Validator = require('validator')
const { isEmpty } = require('./is-empty').default

module.exports = {
  validateFormInput: (data) => {
    const errors = {}

    data.text = !isEmpty(data.text) ? data.text : ''

    if (Validator.isEmpty(data.text)) {
      errors.text = 'Field is required'
    }

    return {
      errors,
      isValid: isEmpty(errors)
    }
  }
}
