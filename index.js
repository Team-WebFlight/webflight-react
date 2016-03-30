'use strict'

const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const stringifyFiles = require('./lib/stringifyFiles')
const createFilesObj = require('./lib/createFilesObj')
const hashFilesObj = require('./lib/hashFilesObj')
const writeJsUL = require('./lib/writeJsUL')
const replaceHtml = require('./lib/replaceHtml')
const addStatusBar = require('./lib/addStatusBar')
const writeNewHtml = require('./lib/writeNewHtml')
const botGenerator = require('./lib/botGenerator')

/**
* @param {Object} options
*   siteUrl: String            (required)
*   assetsPath: String|Array   (required)
*   assetsRoute: String|Array  (required)
*   routes: Object             (required)
*   userCount: Number          (optional - defaults to 10)
*   wfPath: String             (optional - defaults to '/wfPath')
*   wfRoute: String            (optional - defaults to '/wfRoute')
*   seedScript: String         (optional - defaults to 'wf-seed.js')
*   statusBar: Boolean         (optional - defaults to true)
*
* @param {string} serverRoot - path to root folder
*/

function WebFlight (options, serverRoot) {
  Object.keys(options).forEach((key) => {
    this[key] = options[key]
  })

  let fileNamesArr = Object.keys(this.routes).map((file) => {
    return path.basename(this.routes[file])
  })

  this.active = false // non-configurable
  this.fileNames = fileNamesArr // non-configurable

  this.wfPath = options.wfPath || path.join(serverRoot, '/wfPath')  // default

  // TODO: existsSync is deprecated, need alternative
  if (!fs.existsSync(this.wfPath)) {
    fs.mkdirSync(this.wfPath)
    fs.mkdirSync(path.join(this.wfPath, 'js'))
  }

  this.seedScript = options.seedScript || path.join(this.wfPath, 'js/wf-seed.js')  // default

  this.htmlOutput = fileNamesArr.map((file) => { // non-configurable
    return `${this.wfPath}/wf-${file}`
  })

  this.statusBar = options.statusBar || true // default
  console.log('wfobj', this)

  if (!this.siteUrl) showError('siteUrl')
  if (!this.assetsPath) showError('assetsPath')
  // if (!this.assetsRoute) showError('assetsRoute')
  if (!options) showError('options')
}

// TODO: Recreate
WebFlight.prototype.init = function () {

  createFilesObj(this.assetsPath)
  // .then(prioritizeFiles) --> resolve array
  // .then(createTorrent)
  // .then(createHtml)
  // .then(writeJsUL)
  // .then(botGenerator)

  if (this.statusBar) {
    hashFilesObj(filesObj)
    .then(writeJsUL.bind(null, this.seedScript, this.siteUrl, this.stopCount))
    .then(replaceHtml.bind(null, htmlStrings, htmlFiles))
    .then(addStatusBar.bind(null))
    .then(writeNewHtml.bind(null, this.htmlOutput))
  } else {
    hashFilesObj(filesObj)
    .then(writeJsUL.bind(null, this.seedScript, this.siteUrl, this.stopCount))
    .then(replaceHtml.bind(null, htmlStrings, htmlFiles))
    .then(writeNewHtml.bind(null, this.htmlOutput))
  }
}

WebFlight.prototype.redirect = function (req, res, next) {
  // Go to new wf-index.html
}

function showError (input) {
  if (input === 'options') console.error('Error: You must enter an options object')
  else console.log(`Error: WebFlight options object requires "${input}" property`)
}

module.exports = WebFlight
