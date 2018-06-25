import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button.js'
import Input from './components/input/Input.js'
import DropDown from './components/dropdown/DropDown.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Components</h1>
        </header>
      <br/>
      <div>
        <Button />
        <br/>
        <Input />
        <br/>
        <DropDown />
      </div>
      </div>
    );
  }
}

export default App;
