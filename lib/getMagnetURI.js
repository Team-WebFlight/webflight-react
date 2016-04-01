'use strict'
const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')

/**
 * @param { Array } sortedFilesArr - resolved from writeSeedScript
 *
 * @return { Promise } resolves with magnetURI
 */

function getMagnetURI (sortedFilesArr) {
  return new Promise((resolve, reject) => {
    return createTorrent(sortedFilesArr, (err, torrent) => {
      if (err) throw err
      const tor = parseTorrent(torrent)
      const hash = tor.infoHash
      const torrentname = tor.name
      const trackers = tor.announce.map((tracker) => `tr=${tracker}`).join('&')

      var uriString = `magnet:?xt=urn:btih:${hash}&dn=${torrentname}&${trackers}`
      resolve(uriString)
    })
  })
}

module.exports = getMagnetURI
