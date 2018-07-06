import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './../button/Button';
import Checkbox from './../checkbox/Checkbox';
import DropDown from './../dropdown/DropDown';
import Input from './../input/Input';
import RadioButton from './../radiobutton/RadioButton';
import Dashboard from '../dashboard/Dashboard.js'

const Container = styled.div`
width: 100%;
height: 90vh;
`
const StyForm = styled.form`
width: 50%;
height: 70vh;
border: 1px solid black;
margin: 0 auto;
border-radius: 8px;
`


class Form extends Component {
	render() {
		return (
			<div>
			<Dashboard />
			<Container>
			<h2>Contact</h2>
				<StyForm>
				<Input title={'Username'} />
				<Input type="password" title={'Password'} />
				<RadioButton title={'Female'}/>
				<RadioButton title={'Male'}/>
				<DropDown title={'Contact reason'}
				 />
				<Checkbox style={{margin:'15px'}} title={'Technical tools: JavaScript'}/>
				<Checkbox title={'Bootstrap'}/>
				<Checkbox title={'jQuery'}/>
				<Checkbox title={'HTML'}/>
				<Button/>
				</StyForm>
			</Container>

			</div>
		);
	}
}

export default Form;