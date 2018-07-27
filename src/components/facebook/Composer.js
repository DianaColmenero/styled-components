import React from 'react';
// import Preview from './Preview';
import Input from './../input/Input';
import Button from './../button/Button';
// import UploadImage from './../UploadImage/UploadImage';
import styled from 'styled-components';

const StyledComposer = styled.div`
	height: 20vh;
	background: #FFFFFF;
	padding: 2% 5%;
	margin-bottom: 15px;
	display: inline-block;
	border-radius: 5px;
	width: 100%;
	max-width: 471px;
	margin-top: 60px;
`;

export default props => {
	return (
		<StyledComposer className="composer">
			<Input 
			handleChange={props.handleChange} 
			value={props.value} name={props.name}
			/>
			{/* <Preview image={props.image} previewDisplay={props.previewDisplay} /> */}
			{/* <UploadImage uploadImage={props.uploadImage} /> */}
			<Button disabled={props.disabled} title="to post" onClick={props.handleClick} abelDisplay="none" />
		</StyledComposer>
	);
};