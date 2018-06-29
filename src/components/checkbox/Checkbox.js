import React, { Component } from 'react';
import styled from 'styled-components';
const StyledCheckbox = styled.input`
    font-size: 20px;
    margin: 15px;
  `;

  const Label = styled.label`
  margin: 5px 15px;
  font-size: 0.8rem;
  `
  
  const Span = styled.span`
  margin-top: 15px;
  margin-left: 15px;
  `

class Checkbox extends Component {
    render() {
        const { hasError, disabled, labeldisplay, title } = this.props;
        return(
            <div>
               <Span style={{ display: 'block' }}>This is my Checkbox:</Span>
            <StyledCheckbox type="checkbox"
            disabled={disabled}
            style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
            ></StyledCheckbox>
            <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}>{title}</Label>
            </div>
        )
    }
}

export default Checkbox;
