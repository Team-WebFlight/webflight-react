'use strict'
const chai = require('chai')
chai.use(require('chai-fs'))
const expect = chai.expect
const fs = require('fs')
const path = require('path')

const writeSeedScript = require('../../lib/writeSeedScript')
const sortedFilesArr = require('../fixtures/sortedFilesArray')
const options = require('../fixtures/opts').opts1
const pathsArr = require('../fixtures/opts.js')

describe('writeSeedScript', () => {
  writeSeedScript(sortedFilesArr, options.seedScript)
  it('seed file should be created as output', () => {
    const jsFolder = fs.readdirSync(path.join(__dirname, '../fixtures/wfPath/js'))
    expect(jsFolder).to.include('wf-seed.js')
  })
  it('seed file should not contain undefined values', () => {
    const file = path.join(__dirname, '../fixtures/wfPath/js/wf-seed.js')
    expect(file).to.not.have.content.that.match(/undefined/);
  })
})
