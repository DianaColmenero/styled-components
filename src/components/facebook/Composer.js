import React from 'react';
import Preview from './Preview';
// import Textarea from './../Textarea/Textarea';
import Button from './../button/Button';
// import UploadImage from './../UploadImage/UploadImage';
import styled from 'styled-components';

const StyledComposer = styled.div`
	min-height: 250px;
	background: white;
	padding: 2% 5%;
	margin-bottom: 15px;
	display: inline-block;
	border: 1px solid #dbdad8;
	border-radius: 5px;
	width: 100%;
	max-width: 500px;
`;

export default props => {
	return (
		<StyledComposer>
			{/* <Textarea handleChange={props.handleChange} value={props.value} name={props.name} /> */}
			<Preview image={props.image} previewDisplay={props.previewDisplay} />
			{/* <UploadImage uploadImage={props.uploadImage} /> */}
			<Button disabled={props.disabled} title="Post" onClick={props.handleClick} labelDisplay="none" />
		</StyledComposer>
	);
};