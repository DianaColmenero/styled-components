import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'
import styled from 'styled-components';
import MdGroup from 'react-icons/lib/md/group';
import TiWorld from 'react-icons/lib/ti/world';
import TiZoomOutline from 'react-icons/lib/ti/zoom-outline'
import Avatar from './Avatar';

const Nav = styled.nav`
	width: 100%;
	background-color: #4958A3;
	position: fixed;
    max-width: 100%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const Home = styled.div`
	font-size: 0.8rem;
	color: white;
	padding: 4px;
	text-align: left;
	cursor: pointer;
	margin: 10px 4px 10px 0;
	display: inline;
	border-right: 0.01em solid #3A3034;
	height: 2vh;
	padding-right: 7px;
	border-left: 0.01em solid #3A3034;
	padding-left: 10px;
`;

const IconWrapper = styled.div`
	font-size: 1.4rem;
	padding: 4px;
	text-align: left;
	cursor: pointer;
	margin-bottom: 13px;
	display: inline;
	height: 2vh;
	padding-right: 7px;
`;

const FbIcon = styled.div`
	font-size: 2.1rem;
	cursor: pointer;
	display: inline;
	height: 2vh;
	margin-left: 5%;
	margin-bottom: 27px;
	color: #FFFFFF;
`;

const InputWrapper = styled.div`
	display: inline-block;
	margin-right: 18%;
	`;
	
const StyledInputSearch = styled.input`
border: none;
border-bottom-left-radius: 3px;
border-top-left-radius: 3px;
margin: 10px;
width: 35vw;
height: 2vh;
font-size: 0.8em;
display: inline;
padding: 6px;
margin-left: 5px;
position: relative;
margin-right: 0px;
`
const StyledSpan = styled.span`
border: none;
border-bottom-right-radius: 3px;
border-top-right-radius: 3px;
margin: 10px;
width: 4vw;
height: 2vh;
font-size: 0.8em;
display: inline;
padding: 6px;
position: absolute;
background: #E7E8EC;
margin-left: 0px;
cursor: pointer;
`


class Header extends Component {
	handleChange(event) {
		console.log(event.target.value);
	}
	render() {
		return (
			<Nav>
					<FbIcon className='icon-wrapper'>
                    <FontAwesome.FaFacebookOfficial />
                    </FbIcon>

					<InputWrapper>
                        <StyledInputSearch
                        placeholder='Search'
                        // hangleChange={this.handleChange} title="Search" 
						/>
						<StyledSpan><TiZoomOutline
						style={{ fontSize: '1.5em', color:'#6F717D'}} /></StyledSpan>
						
					</InputWrapper>

					<Avatar name={this.props.name} picture={this.props.picture} />
					
					<IconWrapper className='icon-wrapper'>
                    <FontAwesome.FaUserPlus />
                    </IconWrapper>

                    <Home>Home</Home>

					<IconWrapper className='icon-wrapper'>
					<MdGroup />
					</IconWrapper>

					<IconWrapper className='icon-wrapper'>
					<FontAwesome.FaCommenting />
					</IconWrapper>

					<IconWrapper className='icon-wrapper'
					style={{ fontSize: '1.5em'}}>
					<TiWorld />
					</IconWrapper>

					<Home 
					style={{ fontSize: '1.4em', color: 'black', border: 'none', marginBottom: '22px', marginRight: '0px'}}>
						<FontAwesome.FaQuestionCircle/>
					</Home>

					<IconWrapper className='icon-wrapper'
					style={{ paddingLeft: '0px'}}>
                    <FontAwesome.FaAngleDown />
                    </IconWrapper>
					
			</Nav>
		);
	}
}

export default Header;