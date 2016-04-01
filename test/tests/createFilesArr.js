/* global describe, it */

const createFilesArr = require('../../lib/createFilesArr')
const pathsArr = require('../fixtures/opts.js')
const pathsArrUniq = pathsArr.opts1.assetsPath
const pathsArrDups = pathsArr.opts2.assetsPath

const chai = require('chai')
const expect = chai.expect

describe('createFilesArr', () => {
  const filesArrUniq = createFilesArr(pathsArrUniq)
  const filesArrDups = createFilesArr(pathsArrDups)
  it('should return an array', () => {
    expect(filesArrUniq).to.be.an('array')
  })
  it('should not work with uniq file names', () => {
    expect(filesArrDups).to.not.be.an('array')
  })
})
