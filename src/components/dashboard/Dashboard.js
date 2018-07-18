import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
height: 7vh;
width: 75%;
border-radius: 8px;
border: 1px solid #222;
background: #111;
margin: 35px auto;
background-image: linear-gradient(#444, #111);
`

const Li = styled.li`
display: inline-block;
list-style: none;
width: 18%;
padding: 10px 5px;
color: #fff;
margin-top: 10px;
// box-shadow: 0 1px 1px #777;
`

class Dashboard extends Component {
	render() {
		return (
			<div className="nav-wrapper"
            style={{ textAlign: 'center' }}>
                <Navbar>
                    <Li>
                Inicio</Li>
                <Li><Link style={{ color: '#fff',
                textDecoration: 'none' }} to="/allcomponents">My components</Link></Li>
                <Li><Link style={{ color: '#fff',
                textDecoration: 'none' }} to="/Form">Form</Link></Li>
                <Li><Link style={{ color: '#fff',
                textDecoration: 'none' }} to="/todolist">To do list</Link></Li>
                <Li><Link style={{ color: '#fff',
                textDecoration: 'none' }} to="/Facebook">Facebook</Link></Li>

                </Navbar>
			</div>
		);
	}
}

export default Dashboard;