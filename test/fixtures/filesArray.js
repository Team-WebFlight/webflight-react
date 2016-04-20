const path = require('path')
module.exports = {
  notUniq: ['eagle.jpg', 'falcon.jpg', 'owl.jpg', 'eagle.jpg'],
  uniq: ['eagle.jpg', 'falcon.jpg', 'owl.jpg', 'birds.gif'],
  absolute: [ path.join(__dirname, '/assets/images/eagle.jpg'),
  path.join(__dirname,'/assets/images/falcon.jpg'),
  path.join(__dirname,'/assets/images/owl.jpg'),
  path.join(__dirname,'/assets/videos/birds.gif') ]
}
