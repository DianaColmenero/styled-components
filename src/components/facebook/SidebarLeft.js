import React, {Component} from 'react';
import styled from 'styled-components';
import AvatarLeft from './AvatarLeft';
import * as FontAwesome from 'react-icons/lib/fa'

const ContainerLeft = styled.div`
float: left;
position: fixed;
// min-height: 270px;
width: 159px;
padding: 0px 10px 0 15px;
margin-top: 60px;
color: black;
// font-size: 0.9em;

`;

const Asafe = styled.a`
width: 159px;
color: #61676f;
margin: 0;
font-size: 0.8em;
display: inline-block;
text-align: left;
cursor: pointer;
padding: 0 0 5px 5px;

&:hover {
    background: #f5f6f8;
  }
`;

const ImgWra = styled.span`
margin: 5px 5px 0 0;
font-size: 1.3em;
text-align: left;
display: inline-block;
`;

const Title = styled.h4`
margin: 10px;
color: #5C5F68;
font-size: 0.8em;
text-align: left;

`;

const See = styled.a`
width: 159px;
margin: 0;
font-size: 0.8em;
display: inline-block;
text-align: left;
cursor: pointer;
padding: 0 0 5px 5px;

`;



class SidebarLeft extends Component {
    render() {
        console.log(this.props);
        
        return (
            <ContainerLeft>
                <AvatarLeft  
                fullname={this.props.fullname} picture={this.props.picture} 
                />
                <Asafe>
                <ImgWra><FontAwesome.FaNewspaperO/></ImgWra>
                News
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaCommenting/></ImgWra>
                Messenger
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaHome/></ImgWra>
                Marketplace
                </Asafe>

                <Title>Shortcuts</Title>

                <Asafe>
                <ImgWra><FontAwesome.FaGroup/></ImgWra>
                Renta de departa...
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaFemale/></ImgWra>
                TechWo
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaGraduationCap/></ImgWra>
                5ta generación-L...
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaGroup/></ImgWra>
                Bizarro
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaGroup/></ImgWra>
                Renta de casas ...
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaCoffee/></ImgWra>
                Freelancín
                </Asafe>

                <See href="#">
                <ImgWra><FontAwesome.FaAngleDown/></ImgWra>
                See more...
                </See>

                <Title>Explorer</Title>

                <Asafe>
                <ImgWra><FontAwesome.FaFolderOpen/></ImgWra>
                Guardado
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaCalendar/></ImgWra>
                Eventos
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaGroup/></ImgWra>
                Grupos
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaFlag/></ImgWra>
                Páginas
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaClockO/></ImgWra>
                Recuerdos
                </Asafe>

                <Asafe>
                <ImgWra><FontAwesome.FaGamepad/></ImgWra>
                Juegos
                </Asafe>

                <See href="#">
                <ImgWra><FontAwesome.FaAngleDown/></ImgWra>
                See more...
                </See>

                <Title>Create</Title>

                <See href="#">
                Page · Group · Event · Publicity
                </See>
               
                
            </ContainerLeft>


        );
    }
}

export default SidebarLeft;