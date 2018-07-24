import React from 'react';
// import { PreviewStyled } from './PreviewStyled';
import styled from 'styled-components';

const PreviewStyled = styled.img`
	height: 150px;
	display: block;
`;

export default props => {
	return <PreviewStyled style={{ display: props.previewDisplay }} src={props.image} />;
};