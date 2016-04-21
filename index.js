'use strict'

const path = require('path')
const fs = require('fs')
const stringifyHtml = require('./lib/stringifyHtml')
const createFilesArr = require('./lib/createFilesArr')
const prioritizeFiles = require('./lib/prioritizeFiles')
const writeSeedScript = require('./lib/writeSeedScript')
const getMagnetURI = require('./lib/getMagnetURI')
const injectScript = require('./lib/injectScript')
const writeNewHtml = require('./lib/writeNewHtml')
let botGenerator

/**
* @param {Object} options
*   assetsPath: String | Array (required)
*   siteUrl: String            (required)
*   seedScript: String         (optional - defaults to 'wf-seed.js')
*   htmlInput: String          (optional - defaults to 'index.html')
*   htmlOutput: String         (optional - defaults to 'wf-index.html')
*   statusBar: Boolean         (optional - defaults to true)
*   devMode: Boolean           (optional - defaults to true)
*
* @param {string} serverRoot - path to root folder
*/

function WebFlight (options, serverRoot) {
  Object.keys(options).forEach((key) => {
    this[key] = options[key]
  })

  this.wfPath = path.join(serverRoot, '/wfPath')
  fs.mkdir(this.wfPath, () => `made ${this.wfPath}`)

  // make dir for seedScript if not specified in options
  if (!options.seedScript) {
    fs.mkdir(path.join(this.wfPath, '/js'), () => {})
    this.seedScript = `${this.wfPath}/js/wf-seed.js`
  } else {
    this.seedScript = options.seedScript
  }
  this.htmlInput = options.htmlInput || path.join(serverRoot, 'index.html')  // default
  this.htmlOutput = options.htmlOutput || path.join(serverRoot, '/wfPath/wf-index.html')  // non-configurable
  this.statusBar = options.statusBar || true // default
  this.devMode = options.devMode || true

  if (!serverRoot) showError('serverRoot')
  if (!this.siteUrl) showError('siteUrl')
  if (!this.assetsPath) showError('assetsPath')
  if (!options) showError('options')
}

WebFlight.prototype.init = function () {
  if (this.assetsPath.constructor === String) this.assetsPath = [this.assetsPath]

  const stringifiedHtml = stringifyHtml(this.htmlInput)
  const files = createFilesArr(this.assetsPath)
  const sortedFiles = prioritizeFiles(files)
  writeSeedScript(sortedFiles, this.seedScript)
  if (this.devMode) {
    botGenerator = require('./lib/botGeneratorDev')
  } else {
    botGenerator = require('./lib/botGenerator')
  }
  getMagnetURI(sortedFiles)
  .then(injectScript.bind(null, stringifiedHtml))
  .then(writeNewHtml.bind(null, this.htmlOutput))
  .then(botGenerator.bind(null, this.seedScript))
}

WebFlight.prototype.redirect = function (req, res, next) {
  if (req.originalUrl === this.siteUrl) {
    res.sendFile(this.htmlOutput)
  }
}

function showError (input) {
  if (input === 'options') console.error('Error: You must enter an options object')
  else console.log(`Error: WebFlight options object requires "${input}" property`)
}

module.exports = WebFlight
