import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fn}>Click Here</button>
      </div>
    );
  }
}

export default Button;