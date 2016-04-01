/* global describe, it */
'use strict'
const chai = require('chai')
const assert = chai.assert
const getMagnet = require('../../lib/getMagnetURI')
const _filesSrcArray = require('../fixtures/filesArray').dirname



//describe('createTorrent', () => {
//  it('should return a string', () => {
//    assert.isString(getMagnet(filesSrcArray), 'is a string')
//  })
//})
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
  createTorrent(fileSrcArray, torrentOpts, (err, torrent) => {
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

console.log('get mag ', getMagnetURI(_filesSrcArray))
