'use strict'

const fs = require('fs')

/**
 * @param { Array } filesArr - (output of createFilesArr) array of file basenames
 * @param { String } seedScript - location of the .js file output
 */

function writeSeedScript (filesArr, seedScript) {
  let totalSeeds = 0

  let jsString = `var WebTorrent = require("webtorrent");
var client = new WebTorrent();`

  filesArr.forEach((file) => {
    if (!jsString.includes(file)) {
      totalSeeds++
      jsString += `

client.seed('${file}', function(torrent) {
  --totalSeeds;
  console.log('🐣 ', torrent.files[0].name, ' now seeding at hash ', torrent.infoHash);

  if (!totalSeeds) console.log("🕊 all seeds active")
});`
    }
  })

  fs.writeFileSync(seedScript, jsString, 'utf8')
}

module.exports = writeSeedScript
