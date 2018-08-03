import React from 'react';
import styled from 'styled-components';

const Publicity = styled.div`
border-radius: 5px;
height: 195px;
`;

const Title = styled.div`
line-height: 12px;
height: 16px;
padding-bottom: 12px;
color: #5C5F68;
font-size: 0.8em;
`;

const TitleSpan = styled.div`
color: #5C5F68;
font-weight: 600;
cursor: pointer;
display: inline;
`;

const CreateAd = styled.a`
text-decoration: none;
color: #545ADB;
margin-left: 50%;
`;

const ImageContainer = styled.div`
width: 300px;
height: 149px;
`;

const Image = styled.img`
	width: 300px;
	height: 149px;
`;

const TxtContainer = styled.div`
width: 300px;
height: 39px;
`;

export default () => {
    return ( 
    <Publicity>
        <Title>
            <TitleSpan>Publicity</TitleSpan>
            <CreateAd href="#">Create your ad</CreateAd>
        </Title>

        <ImageContainer>
            <Image src="https://source.unsplash.com/CQB5J0hZC5U/1600x900" />
        </ImageContainer>

        <TxtContainer>
        <h6>Certifícate en Marketing Digital nextu.com
¡No sigas dándole largas! Una brillante carrera esh6era por ti. Adquiere los conocimientos...</h6>
        </TxtContainer>

        <ImageContainer>
            <Image src="https://source.unsplash.com/CQB5J0hZC5U/1600x900" />
        </ImageContainer>

        <TxtContainer>
        <h6>
        Full Stack
BEDU.ORG
‼Sé un experto Web Developer‼ 🎓Aprende las habilidades para desarrollar las aplicaciones W...
        </h6>
        </TxtContainer>


    </Publicity>
    );
};
