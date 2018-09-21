import React, { Component } from 'react';
import RobotTabList from './robotTabList';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 0,
      RobotListObj: [
        { id: 1, title: 'Robot 1', desc: 'test' },
        { id: 2, title: 'Robot 2', desc: 'text' },
      ],
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('user') != null) {
      this.setState({ loggedIn: localStorage.getItem('user') });
    }
  }

  handleLogin(e) {
    this.setState({ loggedIn: e });
  }


  render() {
    debugger // eslint-disable-line
    return (
            <div>
                {this.state.loggedIn === 0 && <LogInForm onChange={(e) => { this.handleLogin(e); }}></LogInForm>}
                {this.state.loggedIn != null
                && <RobotTabList RobotIDList={this.state.RobotListObj} ></RobotTabList>
                }
            </div>
    );
  }
}

export default Dashboard;
