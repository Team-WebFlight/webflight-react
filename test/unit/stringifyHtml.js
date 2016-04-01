/* globals describe, it */

'use strict'
const path = require('path')
const chai = require('chai')
const expect = chai.expect

const stringifyHtml = require('../../lib/stringifyHtml.js')
const html = require('../fixtures/opts.js').opts1.htmlInput

describe('stringifyHtml', () => {
  const stringifiedHtmlTest = stringifyHtml(html)
  it('should return a string', () => {
    expect(stringifiedHtmlTest).to.be.a('string')
    expect(stringifiedHtmlTest).to.not.be.empty
  })
})
