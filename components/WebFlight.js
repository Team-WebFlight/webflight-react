/* globals wfGlobal */

var React = require('react');
var path = require('path');

var WebFlight = React.createClass({displayName: "WebFlight",

  replaceSrc: function (src) {
    if (wfGlobal[path.basename(src)]) {
      this.wfSrc = wfGlobal[path.basename(src)]
    } else {
      this.wfSrc = src
    }
  },

  componentWillReceiveProps: function (nextProps) {
    this.replaceSrc(nextProps.src)
  },

  componentWillMount: function () {
    this.replaceSrc(this.props.src)
  },

  render: function () {
    return (
      React.createElement("div", null, 
      React.createElement("img", React.__spread({},  this.props, {src: this.wfSrc}))
      )
    )
  }

})

module.exports = WebFlight;
