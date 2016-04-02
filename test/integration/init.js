/* globals describe, it */

// NOTE: should work if options.assetsPath is a string and an array

'use strict'

const path = require('path')
const WebFlight = require('../../index')
const options1 = require('../fixtures/opts').opts3
const options2 = require('../fixtures/opts').opts4

const wf = new WebFlight(options1, path.join(__dirname, 'app'))

wf.init()
