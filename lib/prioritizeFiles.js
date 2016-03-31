'use strict'
const fs = require('fs')

/**
 * @param { Array } filesArr - (output of createFilesArr) array of file basenames
 */

function prioritizeFiles (filesArr) {
  let sizeArr = []
  filesArr.forEach((file) => {
    sizeArr.push([file, fs.statSync(file).size])
  })
  return sizeArr.sort((a, b) => a[1] - b[1]).map((subArr) => subArr[0])
}

module.exports = prioritizeFiles
