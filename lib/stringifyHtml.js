'use strict'

const fs = require('fs')

/**
 * @param { String } path - absolute path to main html
 */

function stringifyHtml (path) {
  return fs.readFileSync(path, 'utf8')
}

module.exports = stringifyHtml
