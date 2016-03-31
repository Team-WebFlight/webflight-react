const fs = require('fs')
const path = require('path')
const htmlStrings = fs.readFileSync(
    path.join(__dirname, 'html/index.html'),'utf8')

module.exports = htmlStrings
