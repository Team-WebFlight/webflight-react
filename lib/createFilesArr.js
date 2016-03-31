'use strict'
const fs = require('fs')
const path = require('path')

/**
 * @param { Array } dir - absolute path to directory (or directories) containing content to be seeded
 */

function createFilesArr (dir) {
  // TODO: Add error handling if input dir is not array

  let filesArray = []

  dir.forEach((folder) => {
    fs.readdirSync(folder).forEach((file) => { filesArray.push(`${folder}/${file}`) })
  })

  if (checkIfUniq(filesArray)) return filesArray
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
