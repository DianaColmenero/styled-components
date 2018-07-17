import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
    font-size: 20px;
    margin: 8px;
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
            <div className="check-wrapper"
            style={{ display: 'inline-block' }}>
               {/* <Span style={{ display: 'inlin-block', color: hasError !== true ? 'black' : 'red' }}>{title}</Span> */}
            <StyledCheckbox type="checkbox"
            onChange={this.props.toggleChange}
            disabled={disabled}
            style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
            // checked={checked}
            ></StyledCheckbox>
            {/* <Label style={{ display: labeldisplay, color: hasError !== true ? 'black' : 'red' }}></Label> */}
            </div>
        )
    }
}

export default Checkbox;
