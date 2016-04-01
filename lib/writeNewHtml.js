'use strict'

const fs = require('fs')

function writeNewHtml (htmlString, htmlOutput) {
  fs.writeFileSync(htmlOutput, htmlString, 'utf8')
}

module.exports = writeNewHtml
