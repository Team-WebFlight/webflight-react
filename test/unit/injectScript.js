/* global describe, it */

'use strict'
const chai = require('chai')
const assert = chai.assert
const createHtml = require('../../lib/createHtml')
const htmlString = require('../fixtures/htmlStrings')
const fileObject = require('../fixtures/filesObj')
const output = createHtml(htmlString,fileObject)

describe('createHtml', () => {
  it('should return a string', () => {
   assert.isString(output[0], 'is an html string')
  })

  it('should inject `client.add` script', () => {
    assert.isTrue(output[0].includes('client.add'), 'includes injected js')
  })

  it('should output different string than it takes in', () => {
    let input = htmlString
    assert.notEqual(input, output, 'transforms input string')
  })
})

