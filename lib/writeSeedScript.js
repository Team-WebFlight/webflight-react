'use strict'

const fs = require('fs')

/**
 * @param { Array } sortedFilesArr - output of prioritizeFiles
 * @param { String } seedScript - location of the .js file output
 */

function writeSeedScript (sortedFilesArr, seedScript) {
  let jsString = `
var WebTorrent = require("webtorrent");
var client = new WebTorrent();

client.seed(${JSON.stringify(sortedFilesArr)}, function(torrent) {
  var totalSeeds = ${sortedFilesArr.length};

  torrent.files.forEach(function(file) {
    totalSeeds--;
    console.log('🐣 ', file.name, ' now seeding at hash ', torrent.infoHash)
  })

  if (!totalSeeds) console.log("🕊  all seeds active")
});`

  fs.writeFileSync(seedScript, jsString, 'utf8')
}

module.exports = writeSeedScript
