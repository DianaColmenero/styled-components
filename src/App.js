import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard'
// import AllMyComponents from './components/allMyComponents/AllMyComponents'
import Form from './components/form/Form'
import AllMyComponents from './components/allMyComponents/AllMyComponents';

class App extends Component {
  render() {
    return(
      <div className="App">
      
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/allcomponents" component={AllMyComponents} />
        <Route path="/form" component={Form} />

        </Switch>
      


      </div>

    );
  }
}



export default App;
