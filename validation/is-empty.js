﻿const isEmpty = (value) =>
  !!value ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)

module.exports = isEmpty
