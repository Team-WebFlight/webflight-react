import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Logo from './components/Logo.jsx'
import Button from './components/Button.jsx'
import WebFlight from '../webflight/Webflight.jsx'
import path from 'path'

class App extends Component {
  constructor () {
    super()
    this.state = {num: Math.floor(Math.random() * 4)}
    this.refresh = function () {
      return this.setState({num: Math.floor(Math.random() * 4)})
    }.bind(this)
  }

  render () {

    const logos = ['imgs/google.png', 'imgs/apple.png', 'imgs/netflix.png', 'imgs/spacex.png']

    return (
    <div>
      <WebFlight src={logos[this.state.num]} />
      <Button fn={this.refresh} />
      <WebFlight src="imgs/spacex.png" style={{height: 200}} />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
