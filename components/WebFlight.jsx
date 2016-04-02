/* globals wfGlobal */

import React, { Component } from 'react'
import path from 'path'

class WebFlight extends Component {
  // NOTE: Does this.wfSrc need to be in the constructor?

  constructor () {
    super()
    this.replaceSrc = function (src) {
      if (wfGlobal[path.basename(src)]) {
        this.wfSrc = wfGlobal[path.basename(src)]
      } else {
        this.wfSrc = src
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    this.replaceSrc(nextProps.src)
  }

  componentWillMount () {
    // NOTE: Standard error: 'src' is missing in props validation for WebFlight

    this.replaceSrc(this.props.src)
  }

  render () {
    return (
    <div>
      <img {...this.props} src={this.wfSrc} />
    </div>
    )
  }
}

export default WebFlight
