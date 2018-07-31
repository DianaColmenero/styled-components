import React from 'react';
import styled from 'styled-components';

const PictureStyled = styled.img`
	border-radius: 50%;
	height: 35px;
	width: 35px;
	margin-top: 10px;
	margin-right: 10px;
	vertical-align: middle;
`;
//Picture
export default props => {
	return <PictureStyled src={props.src} alt={props.src} />;
};