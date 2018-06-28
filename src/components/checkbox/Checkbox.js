import React, { Component } from 'react';
import styled from 'styled-components';
const StyledCheckbox = styled.input`
    font-size: 20px;
    margin: 15px;
  `;

const Label = styled.label`
margin: 10px 15px;;
`;

class Checkbox extends Component {
    render() {
        const { hasError, disabled, labeldisplay, title } = this.props;
        return(
            <div>
            <StyledCheckbox type="checkbox"
            style={{ borderColor: hasError !== true ? 'gray' : 'red'}}
            disabled={disabled}
            ></StyledCheckbox>
            <Label style={{ display: labeldisplay }}>{title}</Label>
            </div>
        )
    }
}

export default Checkbox;
