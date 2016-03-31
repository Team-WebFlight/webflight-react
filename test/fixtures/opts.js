const path = require('path')

module.exports = {
  opts1: {
    siteUrl: 'http://localhost:3000',
    assetsPath: [path.join(__dirname, 'test-website/img'), path.join(__dirname, 'test-website/videos')],
    assetsRoute: ['bird-imgs/', 'bird-videos/', 'other-imgs/'],
    routes: {
      '/': path.join(__dirname, 'test-website/index.html'),
      '/how.html': path.join(__dirname, 'test-website/how.html')
    }
  },
  opts2: {
    siteUrl: 'http://localhost:3000',
    assetsPath: [path.join(__dirname, 'test-dir'), path.join(__dirname, 'test-dir2')],
    assetsRoute: ['info/'],
    routes: {
      '/': path.join(__dirname, 'test-website/index.html')
    }
  }
}
