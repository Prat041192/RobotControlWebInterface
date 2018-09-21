import React, { Component } from 'react';
import './App.css';
// import RouteDef from './routes/index';
import Navigation from './components/nav';
import RobotTabList from './components/robotTabList';
import LogInForm from './components/login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 0,
      RobotListObj: [],
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.connected = this.connected.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  handleLogin(e) {
    this.setState({ loggedIn: e });
  }

  connected(robot) {
    const list = this.state.RobotListObj;
    list.push(robot);
    this.setState({ RobotListObj: list });
  }

  checkUser() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  render() {
    let navbar;
    let mainPanel;
    if (!this.checkUser()) {
      navbar = '';
      mainPanel = <LogInForm onChange={(e) => { this.handleLogin(e); }}></LogInForm>;
    } else {
      navbar = <Navigation isConnected={this.connected} user={this.state.loggedIn}></Navigation>;
      if (this.state.RobotListObj.length > 0) {
        mainPanel = <RobotTabList RobotIDList={this.state.RobotListObj} ></RobotTabList>;
      }
    }
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Indoor Robot Driving Assistance</h1>
      </header>
      {navbar}
      {mainPanel}
      </div>

    );
  }
}

export default App;
