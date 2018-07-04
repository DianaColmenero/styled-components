import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './../button/Button';
import Checkbox from './../checkbox/Checkbox';
import DropDown from './../dropdown/DropDown';
import Input from './../input/Input';
import RadioButton from './../radiobutton/RadioButton';

const Container = styled.div`
width: 100%;
height: 90vh;
border: 1px solid black;
`
const StyForm = styled.form`
width: 50%;
height: 60vh;
border: 1px solid green;
margin: 0 auto;
border-radius: 8px;
`


class Form extends Component {
	render() {
		return (
			<div>
			<Container>
			<h2>Form</h2>
				<StyForm>
				<Input title={'Username'} />
				<Input type="password" title={'Password'} />
				<RadioButton title={'Female'}/>
				<RadioButton title={'Male'}/>
				<DropDown title={'Contact reason'}/>
				<Checkbox/>
				<Button/>
				</StyForm>
			</Container>

			</div>
		);
	}
}

export default Form;