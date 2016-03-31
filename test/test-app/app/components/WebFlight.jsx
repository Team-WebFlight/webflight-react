import React, { Component } from 'react';

// this.props.src = url

class WebFlight extends Component {
  // constructor() {
  //   super()
  //   this.wfSrc = ''
  // }

  // replaceSrc(src) {
  //   if (wfTorrent[src]) return wfTorrent[src]
  //   else return src
  // }

  componentWillMount() {
    // let wfSrc = ''
    if (wfTorrent[this.props.src]) {
      this.wfSrc = wfTorrent[this.props.src]
    } else {
      this.wfSrc = this.props.src
    }
    // console.log('here is wfSRC: ', this.wfSrc)
    // this.props.src = replaceSrc(this.props.src)
  }

  render() {
    return (
      <div>
        <div>Hello!</div>
        <img src={this.wfSrc}/>
      </div>
    )
  }
}

export default WebFlight
