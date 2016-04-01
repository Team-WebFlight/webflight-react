'use strict'
const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')

/**
 * @param {Array} filesSrcArray - array of file paths
 * @return {string}  magnetURI for collection of files
 */

function getMagnetURI (filesSrcArray) {
  return createTorrent(filesSrcArray, (err, torrent) => {
    if (err) throw err
    const tor = parseTorrent(torrent)
    const hash = tor.infoHash
    const torrentname = tor.name
    const trackers = tor.announce.map((tracker) => `tr=${tracker}`).join('&')

    var uriString = `magnet:?xt=urn:btih:${hash}&dn=${torrentname}&${trackers}`
    return uriString
  })
}

module.exports = getMagnetURI
