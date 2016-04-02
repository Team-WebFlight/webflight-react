'use strict'

const fs = require('fs')

/**
 * @param { String } path - absolute path to main html
 *
 * @return { String } htmlString - contents of path html page as a string
 */

function stringifyHtml (path) {
  return fs.readFileSync(path, 'utf8')
}

module.exports = stringifyHtml
