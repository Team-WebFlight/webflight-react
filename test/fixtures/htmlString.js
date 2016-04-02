const fs = require('fs')
const path = require('path')
const htmlString = fs.readFileSync(path.join(__dirname, 'html/index.html'), 'utf8')

module.exports = htmlString
