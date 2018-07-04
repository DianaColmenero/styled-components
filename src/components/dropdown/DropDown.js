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
  margin: 5px 15px;
  font-size: 0.8rem;
  `
  
  const Span = styled.span`
  margin-top: 15px;
  margin-left: 15px;
  `

class DropDown extends Component{
    render(){
        const { hasError, disabled, labeldisplay, title } = this.props;
        return (
            <div>
            <Span style={{ display: 'inline-block' }}>This is my Input:</Span>
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