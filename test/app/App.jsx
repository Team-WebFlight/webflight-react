import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo.jsx';
import Button from './components/Button.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {num: Math.floor(Math.random() * 4)};
    this.refresh = function() {
      return this.setState({num: Math.floor(Math.random() * 4)});
    }.bind(this);
  }

  render() {
    const logos = ['imgs/google.png', 'imgs/apple.png', 'imgs/netflix.png', 'spacex.png'];

    return (
      <div>
        <Logo image={logos[this.state.num]} otherImage={'other'}/>
        <Button fn={this.refresh} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
