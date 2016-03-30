// TODO: Inject WebTorrent, Client.add torrent, global wf bj
// Input: index.html, torrent
// Output: new index.html file

// original index.html file location doesn't matter; wf.redirect will always send user to new wf-index.html page

// TODO: Check to make sure there's no limit to the # of files you can add to a single torrent 

'use strict'
/**
 * @param {string} htmlString - stringified index.html
 */
const cheerio = require('cheerio')

function replaceHtml (htmlString, filesObj) {
  // const videoExtsArray = [ '.mp4', '.m4v', '.webm' ]
  // const allExtsArray = ['.mp4', '.m4v', '.webm', '.m4a', '.mp3', '.wav', '.aac', '.ogg', '.oga', '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.css', '.html', '.js', '.md', '.pdf', '.txt']
  let replacedHtml = ''
  const $ = cheerio.load(htmlString)
  let dlScript = `<script> \nvar client = new WebTorrent();\nwfGlobal = {}; \n
    client.add('${filesObj[file].magnet}', function(torrent) {
        torrent.files.forEach(function (file) {
          file.getBlobURL(function (err, url) {
            if (err) throw err
            wfGlobal[file.name] = url
          })
        })
        </script>`

  $('body').append('<script src="https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js"></script>')
  $('body').append('<script src="https://code.jquery.com/jquery-2.2.2.js"></script>')
  $('body').append(dlScript)

  replacedHtml = $.html()

  return [replacedHtml, filesObj] // Resolved filesObj to have it in next function
}

module.exports = replaceHtml
