/* global describe, it */

'use strict'

const chai = require('chai')
const expect = chai.expect

const getMagnetURI = require('../../lib/getMagnetURI')
const sortedFilesArray = require('../fixtures/sortedFilesArray')

describe('getMagnetURI', () => {
  it('expect output to be a promise', () => {
    expect(getMagnetURI(sortedFilesArray)).to.be.a('promise')
  })
  it('expect promise to resolve a string', () => {
    getMagnetURI(sortedFilesArray).then((uri) => {
      expect(uri).to.be.a('string')
    })
  })
})
