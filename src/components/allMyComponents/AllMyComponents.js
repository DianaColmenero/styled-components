import React, { Component } from 'react';
import '../../App.css';
import Button from '../button/Button'
import Input from '../input/Input'
import DropDown from '../dropdown/DropDown'
import Checkbox from '../checkbox/Checkbox'
import RadioButton from '../radiobutton/RadioButton'
import Dashboard from '../dashboard/Dashboard.js'


class AllMyComponents extends Component {
    render() {
      return(
        <div className="App">
        <header className="App-header">
        <Dashboard />
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