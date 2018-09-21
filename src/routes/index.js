import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/dashboard';
import AboutPage from '../components/aboutUs';
// import Dashboard from '../components/dashboard';


const history = createHistory();
history.push('/', { some: 'state' });

class RouteDef extends Component {
  render() {
      debugger // eslint-disable-line
    return (
        <Router history={history}>
        <Switch>
            <Route path="/abc" >
                <Route path="/AboutUs" component={ AboutPage }/>
            </Route>
        </Switch>
        </Router>
    );
  }
}

export default RouteDef;
