/* globals describe, it */

'use strict'

const path = require('path')
const chai = require('chai')
chai.use(require('chai-fs'))
const expect = chai.expect
const fs = require('fs')

const writeNewHtml = require('../../lib/writeNewHtml.js')
const output = require('../fixtures/opts').opts1.htmlOutput
const htmlString = require('../fixtures/htmlString')

// TODO: Delete test/fixtures/wfPath/wf-index.html before testing to test if file is being created

describe('writeNewHtml', () => {
  writeNewHtml(output, htmlString)
  it('new html file should be created', () => {
    const wfPathFolder = fs.readdirSync(path.join(__dirname, '../fixtures/wfPath'))
    expect(wfPathFolder).to.include('wf-index.html')
  })
  it('new html file should not be empty', () => {
    const file = path.join(__dirname, '../fixtures/wfPath/wf-index.html')
    expect(file).to.not.be.empty
    expect(file).to.not.have.content.that.match(/undefined/)
  })
})
