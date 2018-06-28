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
margin: 10px 15px;
`

class DropDown extends Component{
    render(){
        const { hasError, disabled, labeldisplay, title } = this.props;
        return (
            <div>
        <StyledDropdown
        style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
        disabled={disabled}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </StyledDropdown>
        <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}>{title}</Label>
      </div>
           
        )
    }
}

export default DropDown;