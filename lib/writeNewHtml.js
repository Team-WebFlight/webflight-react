'use strict'

const fs = require('fs')

/**
 * @param  { String } htmlOutput - path of location new wf-index will be written to
 * @param  { String } htmlString - output of injectScript / new content for wf-index including wfGlobal variable
 */

function writeNewHtml (htmlOutput, htmlString) {
  fs.writeFileSync(htmlOutput, htmlString, 'utf8')
}

module.exports = writeNewHtml
