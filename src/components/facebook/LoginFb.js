import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GlobalContainer from './GlobalContainer';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
// import Dashboard from '../dashboard/Dashboard';
// import Button from './../button/Button';
// import Input from './../input/Input';
// import TodoList from './TodoList';
// import {Link} from 'react-router-dom';
// import { Redirect } from 'react-router-dom';

class LoginFb extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        picture: ''
    }

    responseFacebook = response => {
        // console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userId,
            name: response.name,
            picture: response.picture.data.url,
            redirect: true
        },);
        
    }

    componentClicked = () => console.log('click');
    
    render () {
        let firstName;
		if (this.state.name) {
			let name = this.state.name.split(' ');
			firstName = name[0];
		}

        let fbContent;

        if(this.state.isLoggedIn){
            // return <Redirect to="/wall" />
            fbContent = (
                //     <img src={this.state.picture} alt={this.state.name} />
                // <h2>Welcome {this.state.name}</h2>
                // Email: {this.state.email}
                
                <div className={'lol'} style={{
                    width: '99%',
                    height: '6vh',
                    background: '#4958A3',
                    padding: '8px'
                    
                }}>
                <img
                style={{display:'inline-block', borderRadius: '50%'}} src={this.state.picture} alt={this.state.name} />
                <span style={{display:'inline-block', color:'white'}}>{firstName}</span>
                </div>
            );
        } else {
            fbContent = (
                <FacebookLogin
    appId="272490939996928"
    autoLoad={true}
    fields="name,picture"
    onClick={this.componentClicked}
    callback={this.responseFacebook} />
            );
            
        }

        return (
            <div>
                
        <div>

                {/* <h3>Log in to Facebook</h3> */}
            {/* <form>
                <label>Insert your email</label>
                <Input/>
                <label>Insert your password</label>
                <Input type={'password'} />          
            </form> */}
            {fbContent}
        </div>
        <FaFacebookOfficial style={{float: 'left'}} />
            <GlobalContainer
            />
            </div>
        );
    }
}

export default LoginFb;
