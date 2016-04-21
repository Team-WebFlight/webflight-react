'use strict'
const fs = require('fs')

/**
 * @param { Array } filesArr - (output of createFilesArr) array of file paths
 *
 * @return { Array } prioritizeArr - array of file paths listed in ascending size order
 */

function prioritizeFiles (filesArr) {
  return filesArr.sort((a, b) =>
      fs.statSync(a).size - fs.statSync(b).size
    )
}

module.exports = prioritizeFiles

