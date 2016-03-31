const path = require('path')

const filesObj = {
  '../imgs/apple.png': {
    path: path.join(__dirname, '../fixtures/imgs/apple.png')
  },
  '../imgs/google.png': {
    path: path.join(__dirname, '../fixtures/imgs/google.png')
  },
  '../imgs/netflix.png': {
    path: path.join(__dirname, '../fixtures/imgs/netflix.png')
  }
}

module.exports = filesObj
