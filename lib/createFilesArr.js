'use strict'
const fs = require('fs')
const path = require('path')

/**
 * @param { Array } dirArr - absolute path to directory (or directories) containing content to be seeded
 *
 * @return { Array } filesArr - array of absolute paths to assets that will be seeded
 */

function createFilesArr (dirArr) {
  let filesArr = []

  dirArr.forEach((folder) => {
    fs.readdirSync(folder).forEach((file) => { filesArr.push(`${folder}/${file}`) })
  })

  if (checkIfUniq(filesArr)) return filesArr
  else console.error('Error: Your file names must be unique.')
}

function checkIfUniq (filesArr) {
  let store = {}
  let uniq = true

  filesArr.forEach((file) => {
    file = path.basename(file)
    if (store[file]) uniq = false
    else store[file] = true
  })

  return uniq
}

module.exports = createFilesArr
