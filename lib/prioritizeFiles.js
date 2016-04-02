'use strict'
const fs = require('fs')
const writeSeedScript = require('./writeSeedScript')

/**
 * @param { Array } filesArr - (output of createFilesArr) array of file paths
 *
 * @return { Array } prioritizeArr - array of file paths listed in ascending size order
 */

function prioritizeFiles (filesArr) {
  let prioritizedArr = []

  filesArr.forEach((file) => {
    prioritizedArr.push([file, fs.statSync(file).size])
  })
  prioritizedArr = prioritizedArr.sort((a, b) => a[1] - b[1]).map((subArr) => subArr[0])

  return prioritizedArr
}

module.exports = prioritizeFiles
