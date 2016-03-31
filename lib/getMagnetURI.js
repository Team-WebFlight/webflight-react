'use strict'
const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')
const _filesSrcArray = require('../test/fixtures/filesArray').dirname
/**
 * @param {Array} filesSrcArray - array of file paths
 * @return {string}  magnetURI for collection of files
 */
function getMagnetURI (filesSrcArray, cb) {
  /** Only want announce to webrtc peers; see createTorrent api for details:
  * https://github.com/feross/create-torrent#createtorrentinput-opts-function-callback-err-torrent-
  */
  const torrentOpts = {
    name: 'wf-react-torrent',
    announceList: [[ 'wss://tracker.webtorrent.io' ],
      [ 'wss://tracker.btorrent.xyz' ], [ 'wss://tracker.openwebtorrent.com' ],
      [ 'wss://tracker.fastcast.nz' ]
    ]
  }
  var magnet = new Promise((resolve, reject) => {
   createTorrent(filesSrcArray, torrentOpts, (err, torrent) => {
     if (err) throw err
     const tor = parseTorrent(torrent)
     const hash = tor.infoHash
     const torrentname = torrentOpts.name
     const trackers = tor.announce.map((tracker) => {
        return `tr=${tracker}`
     }).join('&')

    var uriString = `magnet:?xt=urn:btih:${hash}&dn=${torrentname}&${trackers}`
    resolve(uriString)
    })
  })

  return magnet
 }

module.exports = getMagnetURI

console.log('get mag ', getMagnetURI(_filesSrcArray))

