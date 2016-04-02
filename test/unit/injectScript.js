/* globals describe, it */

'use strict'

const chai = require('chai')
const expect = chai.expect
const assert = chai.assert

const injectScript = require('../../lib/injectScript')
const htmlString = require('../fixtures/htmlString')
const magnetURI = require('../fixtures/magnetURI')

describe('injectScript', () => {
  const output = injectScript(htmlString, magnetURI)
  it('expect function to return a string', () => {
    expect(output).to.be.a('string')
  })
  it('should inject `client.add` script', () => {
    assert.isTrue(output.includes('client.add'))
  })
  it('should output different string than it takes in', () => {
    const input = htmlString
    assert.notEqual(input, output)
  })
})
