import React, { Component } from 'react'
import path from 'path'

class WebFlight extends Component {
  // NOTE / Question: this.wfSrc?
  constructor () {
    super()
    this.replaceSrc = function (src) {
      if (wfTorrent[path.basename(src)]) {
        this.wfSrc = wfTorrent[path.basename(src)]
        console.log('SUCCESSFUL RESET')
      } else {
        this.wfSrc = src
        console.log('UNSUCCESSFUL')
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
