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
            <Span style={{ display: 'inline-block', color: hasError !== true ? 'black' : 'red' }}>{title}</Span>
        <StyledDropdown
        style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
        disabled={disabled}>
          <option>Sales</option>
          <option>Help Desk</option>
          <option>Support</option>
          <option>Other</option>
        </StyledDropdown>
        <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}></Label>
      </div>
           
        )
    }
}

export default DropDown;