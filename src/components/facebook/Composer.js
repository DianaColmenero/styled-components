import React from 'react';
import Preview from './Preview';
import Input from './../input/Input';
import Button from './../button/Button';
// import UploadImage from './../UploadImage/UploadImage';
import styled from 'styled-components';

const StyledComposer = styled.div`
	min-height: 100px;
	background: white;
	padding: 2% 5%;
	margin-bottom: 15px;
	display: inline-block;
	border: 1px solid #dbdad8;
	border-radius: 5px;
	width: 100%;
	max-width: 500px;
	margin-top: 60px;
`;

export default props => {
	return (
		<StyledComposer>
			<Input 
			handleChange={props.handleChange} 
			value={props.value} name={props.name} 
			style={{ borderColor: 'gray' }}
			/>
			<Preview image={props.image} previewDisplay={props.previewDisplay} />
			{/* <UploadImage uploadImage={props.uploadImage} /> */}
			<Button disabled={props.disabled} title="Post" onClick={props.handleClick} labelDisplay="none" />
		</StyledComposer>
	);
};