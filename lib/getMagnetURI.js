'use strict'
const createTorrent = require('create-torrent')
const parseTorrent = require('parse-torrent')

/**
 * @param {Array} filesSrcArray - array of file paths
 * @return {string}  magnetURI for collection of files
 */
function getMagnetURI (filesSrcArray) {
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
  const magnet = ''
  _createTorrent(fileSrcArray, torrentOpts, (err, torrent) => {
     if (err) throw err
     const tor = parseTorrent(torrent)
     const hash = tor.infoHash
     const torrentname = torrentOpts.name
     const trackers = torrentOpts.announceList((tracker) => {
        return `tr=${tracker}`
     }).join('&')

     magnet += `magnet:?xt=urn:btih:${hash}&dn=${torrentname}&${trackers}`

  })
 }

module.exports = getMagnetURI
