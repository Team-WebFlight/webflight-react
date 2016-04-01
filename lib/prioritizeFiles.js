'use strict'
const fs = require('fs')
const writeSeedScript = require('./writeSeedScript')

/**
 * @param { Array } filesArr - (output of createFilesArr) array of file basenames
 */

function prioritizeFiles (filesArr, seedScript) {
  let prioritizedArr = []

  filesArr[0].forEach((file) => {
    prioritizedArr.push([file, fs.statSync(file).size])
  })
  prioritizedArr = prioritizedArr.sort((a, b) => a[1] - b[1]).map((subArr) => subArr[0])
  writeSeedScript(prioritizedArr, seedScript)

  return prioritizedArr
}

module.exports = prioritizeFiles
