const path = require('path')

module.exports = {
  opts1: {
    assetsPath: [path.join(__dirname, 'assets/images'), path.join(__dirname, 'assets/videos')],
    seedScript: path.join(__dirname, 'wfPath/js/wf-seed.js')
  },
  opts2: {
    assetsPath: [path.join(__dirname, 'assets/images'), path.join(__dirname, 'assets/videos'), path.join(__dirname, 'assets/imagesCopy')]
  }
}
