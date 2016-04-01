const path = require('path')
module.exports = {
  notUniq: ['eagle.jpg', 'falcon.jpg', 'owl.jpg', 'eagle.jpg'],
  uniq: ['eagle.jpg', 'falcon.jpg', 'owl.jpg', 'birds.gif'],
  absolute: [ '/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/images/eagle.jpg',
  '/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/images/falcon.jpg',
  '/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/images/owl.jpg',
  '/Users/Baoyee/Codesmith/wf-react/test/fixtures/assets/videos/birds.gif' ],
  dirname: [path.join(__dirname, 'assets/images/eagle.jpg'),
  path.join(__dirname, 'assets/images/falcon.jpg'),
  path.join(__dirname, 'assets/images/owl.jpg')
  ]
}

