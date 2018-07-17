import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
// import AllMyComponents from './components/allMyComponents/AllMyComponents'
import Form from './components/form/Form'
import AllMyComponents from './components/allMyComponents/AllMyComponents';
import TodoInput from './components/todoinput/TodoInput'

class App extends Component {
  render() {
    return(
      <div className="App">
      
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/allcomponents" component={AllMyComponents} />
        <Route path="/form" component={Form} />
        <Route path="/todolist" component={TodoInput}/>

        </Switch>
      


      </div>

    );
  }
}



export default App;
