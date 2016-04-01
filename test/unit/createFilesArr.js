/* global describe, it */

'use strict'

const fs = require('fs')
const chai = require('chai')
const expect = chai.expect

const createFilesArr = require('../../lib/createFilesArr')
const pathsArr = require('../fixtures/opts.js')
const pathsArrUniq = pathsArr.opts1.assetsPath
const pathsArrDups = pathsArr.opts2.assetsPath

describe('createFilesArr', () => {
  const filesArrUniq = createFilesArr(pathsArrUniq)
  const filesArrDups = createFilesArr(pathsArrDups)
  it('should return an array', () => {
    expect(filesArrUniq).to.be.an('array')
  })
  it('should return an array of files', () => {
    let num = 0
    pathsArrUniq.forEach((path) => {
      num += fs.readdirSync(path).length
    })
    expect(filesArrUniq.length).to.equal(num)
  })
  it('should not work with uniq file names', () => {
    expect(filesArrDups).to.not.be.an('array')
  })
})
