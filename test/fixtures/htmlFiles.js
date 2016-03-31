const route1 = require('./opts.js').opts1.routes
const route2 = require('./opts.js').opts2.routes

module.exports = {
  route1: Object.keys(route1).map((route) => {
    return route1[route]
  }),
  route2: Object.keys(route2).map((route) => {
    return route2[route]
  })
}
