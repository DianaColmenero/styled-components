import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import '../../App.css';
import Button from '../button/Button.js'
import Input from '../input/Input.js'
import DropDown from '../dropdown/DropDown.js'
import Checkbox from '../checkbox/Checkbox.js'
import RadioButton from '../radiobutton/RadioButton.js'


class AllMyComponents extends Component {
    render() {
      return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <li style={{ position: 'absolute', listStyle: 'none', paddingLeft: '15px' }}><Link style={{ color: '#fff',
                textDecoration: 'none' }} to="/">Inicio</Link>
				</li>
        <h4 className="App-title">My Components</h4>
        </header>
        <br/>
        <div>
        <Button />
        <br/>
        <br/>
        <Input />
        <br/>
        <DropDown />
        <br/>
        <Checkbox />
        <br/>
        <RadioButton />

        </div>
  
  
        </div>
  
      );
    }
  }

  export default AllMyComponents;