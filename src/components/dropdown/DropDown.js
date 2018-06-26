import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.select`
margin: 15px;
font-family: Roboto;
font-size: 1rem;
height: 5vh;
width: 10vw;
`

const Label = styled.label`
margin: 8px;
`

class DropDown extends Component{
    render(){
        return (
            <div>
        <StyledDropdown>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </StyledDropdown>
        <Label></Label>
      </div>
           
        )
    }
}

export default DropDown;