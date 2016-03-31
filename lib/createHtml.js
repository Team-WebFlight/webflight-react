'use strict'

const cheerio = require('cheerio')

/**
 * @param {string} htmlString - stringified index.html
 * @param {string} magnetURI - magnetURI from createTorrent
 * @return {string}           - new wf html with injected scripts and wfGlobal
 */
function createHtml (htmlString, magnetURI) {
  let replacedHtml
  const webtorrent = '<script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>'
  const $ = cheerio.load(htmlString)
  let dlScript = `<script> \nvar client = new WebTorrent();\nwfGlobal = {}; \n
    client.add('${magnetURI}', function(torrent) {
        torrent.files.forEach(function (file) {
          file.getBlobURL(function (err, url) {
            if (err) throw err
            wfGlobal[file.name] = url
          })
        })
        </script>`

  $('body').append(webtorrent)
  $('body').append(dlScript)

  replacedHtml = $.html()

  return [replacedHtml, magnetURI] // Resolved filesObj to have it in next function
}

module.exports = createHtml

