/* globals describe, it */

'use strict'

const chai = require('chai')
const expect = chai.expect

const prioritizeFiles = require('../../lib/prioritizeFiles.js')
const filesArray = require('../fixtures/filesArray').absolute
const sortedFilesArray = require('../fixtures/sortedFilesArray.js')

describe('prioritizeFiles', () => {
  const testArray = prioritizeFiles(filesArray)
  it('should return an array', () => {
    expect(testArray).to.be.an('array')
  })
  it('should return a sorted array', () => {
    testArray.forEach((file) => {
      let index = sortedFilesArray.indexOf(file)
      expect(file).to.equal(sortedFilesArray[index])
    })
  })
})
