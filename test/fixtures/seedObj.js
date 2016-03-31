const path = require('path')

const seedObj = {
  '0': {
    paths:
      [ path.join(__dirname, 'imgs/google.png'),
        path.join(__dirname, 'imgs/apple.png'),
        path.join(__dirname, 'imgs/netflix.png') ],
    srcs:
      [ '../imgs/google.png',
        '../imgs/apple.png',
        '../imgs/netflix.png' ]
  }
}

module.exports = seedObj
