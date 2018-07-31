import React from 'react';
import styled from 'styled-components';

const Name = styled.span`
	font-size: 0.9em;

    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Picture = styled.img`
	height: 25px;
	width: 25px;
	border-radius: 50%;
`;

const AvatarWrapper = styled.div`
	vertical-align: middle;
    display: flex;
    flex: 1;
    align-items: center;
    
`;

export default props => {
	return (
		<AvatarWrapper>
			<Picture src={props.picture} />
			<Name>{props.fullname}</Name>
		</AvatarWrapper>
	);
};