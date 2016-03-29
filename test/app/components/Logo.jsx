import React, { Component } from 'react';
import wf from '../utils/wf.js';

class Logo extends Component {
  constructor() {
    super();

    this.wfProps = {};
  }

  componentWillReceiveProps(nextProps) {
    this.wfProps = wf(nextProps);
  }

  componentWillMount() {
    this.wfProps = wf(this.props);
  }

  render() {
    return (
      <div>
        <img src={this.wfProps.image}/>
      </div>
    );
  }
}

export default Logo;