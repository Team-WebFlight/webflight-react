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
  it('expect output to be an array', () => {
    filesArrUniq.then((data) => {
      expect(data).to.be.an('array')
    })
  })
  it('expect output to be an array of files', () => {
    let num = 0
    filesArrDups.then((data) => {
      pathsArrUniq.forEach((path) => {
        num += fs.readdirSync(path).length
      })
      expect(filesArrUniq.length).to.equal(num)
    })
  })
  it('expect output to be an error if files are not unique', () => {
    expect(filesArrDups).to.not.be.an('array')
  })
})
