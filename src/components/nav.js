import React, { Component } from 'react';
import {
  Navbar, FormGroup, FormControl, Button, Nav, NavItem, Alert, ControlLabel,
} from 'react-bootstrap';
import { Link } from 'react-router';
import ROSLIB from 'roslib';
import Connect from './connection';
import Robot from '../model/robotObj';
import AlertDismissable from './errorAlert';
import * as API from '../util/backend-cli';

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isHidden: true,
      nameOfRobot: '',
      // robotList: [],
      notification: '',
      showNotification: false,
      userID: this.props.user,
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.handleConnection = this.handleConnection.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.ros = new ROSLIB.Ros();
    this.ros.on('connection', () => {
      console.log('Connected to websocket server.');
      // window.confirm('Robot connected');
    });
    this.ros.on('error', (error) => {
      console.log(`Error occurred ${error}`);
      this.setState({ notification: error.message, showNotification: true });
    });
    this.ros.on('close', () => {
      console.log('Connection closed');
    });
    this.url = '../assets/sound/plucky.mp3';
    this.notification = new Audio(this.url);
    this.notifictionSound = '';
  }

  openLoginModal() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  handleConnection = (childRobotURL, robotName) => {
    console.log(`trying to connect to ${childRobotURL}`);
    try {
      this.ros.connect(childRobotURL);
      const robot = new Robot('1', childRobotURL, robotName, this.ros);
      this.subscribe();
      this.props.isConnected(robot);
    } catch (e) {
      console.log(`error occured ${e}`);
      this.setState({ notification: e.message, showNotification: true });
    }
  }

  subscribe() {
    const listener = API.getListener(this.ros);
    listener.subscribe((info) => {
      debugger //eslint-disable-line
      this.notifictionSound = '<audio controls autoplay><source src="../assets/sound/plucky.mp3" type="audio/ogg"></audio>';
      this.notification.play();
      window.confirm(`Robot connected ${info}`);
    });
  }

  closeAlert() {
    this.setState({ showNotification: false, notification: '' });
  }

  render() {
    let connectComponent;
    if (this.state.isHidden === false) {
      connectComponent = <Connect hide={ this.state.isHidden } onConnection={ this.handleConnection } ></Connect>;
    } else {
      connectComponent = '';
    }
    const AudioStyle = {
      hidden: true,
    };
    return (
      <div>
          <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a as={ Link } href="/">Robot Control System</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Nav>
            <NavItem eventKey={3} href="/#" onClick={ this.openLoginModal }>Connect</NavItem>
            {/* <LinkContainer to="/AboutUs" > */}
            <NavItem eventKey={1} >About Us</NavItem>
            {/* </LinkContainer> */}
            </Nav>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search Logs" />
              </FormGroup>{'  '}
              <Button type="submit">Search</Button>{'  '}
              {'  '}
              <FormGroup>
                <ControlLabel>UserID: </ControlLabel>{'  '}
                <ControlLabel>{this.props.user}</ControlLabel>
              </FormGroup>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        {connectComponent}
        <AlertDismissable class='errorNotification' error={this.state.notification} show={this.state.showNotification} handleClose={this.closeAlert}/>
        <div style={AudioStyle}>
          {this.notifictionSound}
        </div>
        {/* <MessageBox ref="messageBox"/> */}
      </div>
    );
  }
}

export default Navigation;
