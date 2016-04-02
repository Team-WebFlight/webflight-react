'use strict'

const cheerio = require('cheerio')

/**
 * @param { String } htmlString - output of stringifyHtml
 * @param { String } magnetURI - resolved from getMagnetURI
 *
 * @return { String } replacedHtml - new wfhtml with injected scripts and wfGlobal
 */

function injectScript (htmlString, magnetURI) {
  let replacedHtml

  const webtorrent = '<script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>'
  const $ = cheerio.load(htmlString)
  let dlScript = `
  <script>
  var client = new WebTorrent();
  wfGlobal = {};

  client.add('${magnetURI}', function(torrent) {
    torrent.files.forEach(function (file) {
      file.getBlobURL(function (err, url) {
        if (err) throw err
        wfGlobal[file.name] = url
      })
    })
  }
  </script>`

  $('body').append(webtorrent)
  $('body').append(dlScript)

  replacedHtml = $.html()

  return replacedHtml
}

module.exports = injectScript
