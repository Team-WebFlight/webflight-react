import React, { Component } from 'react';
import wfReplace from '../utils/wf.js';
// import wf from 'wf-react/utils/wf-react.js'

class Logo extends Component {
  constructor() {
    super();

    this.wfProps = {};
  }

  componentWillReceiveProps(nextProps) {
    this.wfProps = wfReplace(nextProps);
  }

  componentWillMount() {
    // console.log('this is this.wfProps: ', this.wfProps)
    this.wfProps = wfReplace(this.props);
  }
  // this.wfProps.[propName]
  render() {
    console.log('this is this.wfProps: ', this.wfProps)
    return (
      <div>
        <img src={this.wfProps.image}/>
      </div>
    );
  }
}

export default Logo;
