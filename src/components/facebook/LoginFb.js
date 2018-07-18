import React, { Component } from 'react';
// import Dashboard from '../dashboard/Dashboard';
// import Button from './../button/Button';
// import Input from './../input/Input';
// import TodoList from './TodoList';
import FacebookLogin from 'react-facebook-login';
import Dashboard from '../dashboard/Dashboard';

class LoginFb extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        // console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
        
    }

    componentClicked = () => console.log('click');
    
    render () {
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
                </div>
            );
        } else {
            fbContent = (
                <FacebookLogin
    appId="272490939996928"
    autoLoad={true}
    fields="name,email,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
            );
            
        }

        return (
        <div>
            <Dashboard/>
            <br/>
            {fbContent}
        </div>
        );
    }
}

export default LoginFb;
