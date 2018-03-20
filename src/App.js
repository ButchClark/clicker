import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberValue from './components/NumberValue'
import incValue from './actions'

class App extends Component {
    callInc =() =>{
        console.log("> App.callInc() handler")
        incValue()
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> </p>
          <div>
              <NumberValue />
              <button onClick={this.callInc}>Increment</button>
          </div>
      </div>
    );
  }
}

export default App;
